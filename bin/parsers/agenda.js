const csv = require('csvtojson');
const path = require('path');

const _ = require('underscore');
const Prettier = require('prettier');
const Parser = require('../dataParser');
const Sorter = require('../sort');
const Static = require('./agendaData');
const Template = require('../template');
const TEMPLATE_PATH = 'bin/templates/agenda/';
const AGENDA_DIR = 'directories/agenda';
const People = require('./people');
const CurrentYear = new Date().getFullYear();

const ICONS_PATH = 'https://www.fiware.org/fiware-summit/assets/icons/';
const DEFAULT_IMAGE = `${ICONS_PATH}icon-grand-opening.svg`;
const QR_CODES = !!process.env.QR_CODES;
const SOCIAL_IMAGES = !!process.env.SOCIAL_IMAGES;

function getExcerpt(item) {
    const text = Parser.textOnly(item.Description);
    const next = text.indexOf('.', 40);
    return text.substring(0, next + 1);
}
/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of each project for later use
 */
function extractAgenda(input, speakers, activeSpeakers, eventDates) {
    const agenda = [];
    input.forEach((item) => {
        const event = {
            priority: Number(item.Priority),
            track: item.Track,
            moderated: item['Moderators'] !== '',
            session: item.Session,
            prefix: item.Prefix,
            title: item.Title,
            date: Parser.date(item.Date),
            start: item['Start Time'],
            end: item['End Time'],
            location: item.Location,
            img: item.Image ? `${ICONS_PATH}${item.Image}` : DEFAULT_IMAGE,
            description: Parser.markdown(item.Description),
            excerpt: getExcerpt(item),
            publish: Parser.boolean(item.Published)
        };

        if (event.publish) {
            let names = _.uniq(
                _.map(
                    _.filter(item['Speakers'].split(','), function (name) {
                        return name !== '';
                    }),
                    (name) => {
                        return name.trim();
                    }
                )
            );
            let moderators = _.uniq(
                _.map(
                    _.filter(item['Moderators'].split(','), function (name) {
                        return name !== '';
                    }),
                    (name) => {
                        return name.trim();
                    }
                )
            );

            names = moderators.concat(names);
            event.speakers = _.map(names, function (name) {
                const speaker = _.findWhere(speakers, { name });

                if (speaker) {
                    speaker.shortJob = speaker.filters[0];
                } else {
                    console.error(`DATA MISMATCH: Missing Speaker: ${name}`);
                }

                return speaker ? speaker : { name };
            });

            event.speakers.forEach((speaker) => {
                activeSpeakers.push(speaker);
            });

            event.startTime = Parser.addTime(event.date, event.start);
            event.shortDate = event.date.toLocaleDateString('en-GB', { month: 'long', day: 'numeric' });
            const filename = Template.createClass(event.title);
            event.social = `/fgs-${CurrentYear}/${filename}.html`;
            event.socialImage = `/fgs-${CurrentYear}/${filename}.png`;
            event.trackColor = Static.getTrackColor(event.track);
            event.numSpeakers = event.speakers.length;
            eventDates.push(event.shortDate);
            agenda.push(event);
        }
    });

    if (agenda.length === 0) {
        console.error('ERROR: No agenda uploaded.');
        process.exit(1);
    }
    console.log(agenda.length, ' agenda items generated.');
    console.log(activeSpeakers.length, ' agenda speakers found.');

    agenda.sort((a, b) => {
        if (b.date.getTime() !== a.date.getTime()) {
            return a.date.getTime() - b.date.getTime();
        }
        if (b.startTime.getTime() !== a.startTime.getTime()) {
            return a.startTime.getTime() - b.startTime.getTime();
        }
        return a.priority - b.priority;
    });

    return agenda;
}

function generateHTML(agenda, activeSpeakers, eventDates, style) {
    const people = _.uniq(activeSpeakers);
    const collator = new Intl.Collator('en', { sensitivity: 'base' });
    const speakerNames = _.map(people, (a) => {
        return a.name;
    }).sort((a, b) => {
        return collator.compare(a.split(' ')[1], b.split(' ')[1]);
    });
    const summitDates = _.uniq(eventDates);
    const filterData = {
        tracks: Sorter.sortData(agenda, 'track'),
        sessions: Sorter.flatSortData(agenda, 'session'),
        prefixes: Sorter.flatSortData(agenda, 'prefix'),
        speakers: speakerNames,
        people,
        summitDates,
        agenda
    };

    Template.clean(path.join(AGENDA_DIR, '/program'));

    Template.write(path.join(AGENDA_DIR, 'agenda.html'), path.join(TEMPLATE_PATH, 'card.hbs'), agenda);
    Template.write(path.join(AGENDA_DIR, 'pageData.js'), path.join(TEMPLATE_PATH, 'modal.hbs'), filterData);
    Template.write(path.join(AGENDA_DIR, 'filters.html'), path.join(TEMPLATE_PATH, 'filter.hbs'), filterData);

    Template.write(path.join(AGENDA_DIR, 'program/pageData.js'), path.join(TEMPLATE_PATH, 'details.hbs'), filterData);

    Template.write(
        path.join(AGENDA_DIR, 'program-details-summary/pageData.js'),
        path.join(TEMPLATE_PATH, 'details.hbs'),
        filterData
    );

    Template.write(path.join(AGENDA_DIR, 'program/sitemap.html'), path.join(TEMPLATE_PATH, 'sitemap-html.hbs'), agenda);

    Template.write(path.join(AGENDA_DIR, 'calendar.html'), path.join(TEMPLATE_PATH, 'calendar.hbs'), agenda);
    Template.write(path.join(AGENDA_DIR, 'program/sitemap.xml'), path.join(TEMPLATE_PATH, 'sitemap-xml.hbs'), agenda);

    const socialImages = [];
    agenda.forEach((event) => {
        const filename = Template.createClass(event.title);
        Template.write(
            path.join(AGENDA_DIR, `program/${filename}.html`),
            path.join(TEMPLATE_PATH, 'social-media.hbs'),
            event
        );
        Prettier.format(path.join(AGENDA_DIR, `program/${filename}.html`), { parser: 'html' });
        socialImages.push({
            output: path.join(AGENDA_DIR, `program/${filename}.png`),
            event,
            year: CurrentYear.toString().substr(-2),
            font: Template.font,
            style
        });
    });
    Prettier.format(path.join(AGENDA_DIR, 'agenda.html'), { parser: 'html' });
    Prettier.format(path.join(AGENDA_DIR, 'pageData.js'), { parser: 'flow' });

    if (QR_CODES) {
        Template.qrCodes(path.join(AGENDA_DIR, 'qr'), agenda);
    }
    if (SOCIAL_IMAGES) {
        Template.createSocialMediaImages(socialImages, path.join(TEMPLATE_PATH, 'social-media-image.hbs'));
    }
    return agenda;
}

/**
 * Read in the careers file and output
 * HTML and JavaScript files
 */
function parse(agendaFile, speakersFile) {
    const activeSpeakers = [];
    const eventDates = [];
    const style = {
        one: Template.readCSS('agenda', 'one'),
        two: Template.readCSS('agenda', 'two'),
        three: Template.readCSS('agenda', 'three'),
        four: Template.readCSS('agenda', 'four'),
        many: Template.readCSS('agenda', 'many')
    };

    return csv()
        .fromFile(speakersFile)
        .then((input) => {
            const allSpeakers = People.extract(input);
            return csv()
                .fromFile(agendaFile)
                .then((input) => {
                    return extractAgenda(input, allSpeakers, activeSpeakers, eventDates);
                })
                .then((agenda) => {
                    return generateHTML(agenda, activeSpeakers, eventDates, style);
                })
                .catch((e) => {
                    console.log(e);
                });
        });
}

exports.parse = parse;
exports.file = 'agenda.csv';
