const csv = require('csvtojson');
const path = require('path');

const _ = require('underscore');
const Prettier = require('prettier');
const Parser = require('../../dataParser');
const Sorter = require('../../sort');
const Template = require('../../template');
const TEMPLATE_PATH = 'bin/directories/agenda/';
const AGENDA_DIR = 'directories/agenda';
const People = require('../../people/parser');

const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/agenda/images/careers-default.png';


function getExcerpt(item){
    let text =  Parser.textOnly(item['Description']);
    const next = text.indexOf(".", 40);
    return text.substring(0, next +1)
}
/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of each project for later use
 */
function extractAgenda(input, speakers, activeSpeakers, eventDates) {
    const agenda = [];
    input.forEach((item) => {
        const event = {
            track: item['Track'],
            session: item['Session'],
            title: item['Title'],
            date: Parser.date(item['Date']),
            start: item['Start Time'],
            end: item['End Time'],
            location: item['Location'],
            img: item['Image'] ? item['Image'] : DEFAULT_IMAGE,
            description: Parser.markdown(item['Description']),
            excerpt: getExcerpt(item),
            publish: Parser.boolean(item['Published'])
        };

        if (event.publish) {
            const names = _.uniq(
                _.filter(
                    [
                        item['Speaker 1'],
                        item['Speaker 2'],
                        item['Speaker 3'],
                        item['Speaker 4'],
                        item['Speaker 5'],
                        item['Speaker 6']
                    ],
                    function (name) {
                        return name !== '';
                    }
                )
            );

            event.speakers = _.map(names, function (name) {
                const speaker = _.findWhere(speakers, { name });

                if(speaker){
                    speaker.shortJob = speaker.filters[0];
                } else {
                    console.error(`DATA MISMATCH: Missing Speaker: ${name}`)
                }


                return !!speaker ? speaker : { name, img: People.DEFAULT_IMAGE };
            });

            event.speakers.forEach(speaker => {
                activeSpeakers.push(speaker);
            });

            event.startTime = Parser.addTime(event.date, event.start);
            event.shortDate = event.date.toLocaleDateString(undefined, {month: "long", day: "numeric"});
            const filename= Template.createClass(event.title);
            event.social = `/program/${filename}.html`
            eventDates.push(event.shortDate)
            agenda.push(event);
        }
    });


    if (agenda.length === 0) {
        console.error('ERROR: No agenda uploaded.');
        process.exit(1);
    }
    console.log(agenda.length, ' agenda items generated.');
    console.log(activeSpeakers.length, ' agenda speakers found.')

    return agenda.sort((a, b) => {
        return a.startTime > b.startTime.getTime();
    });
}

/**
 * Read in the careers file and output
 * HTML and JavaScript files
 */
function parse(agendaFile, speakersFile) {
    let agendaData = null;
    let people = null;
    let activeSpeakers = [];
    let eventDates = [];

    csv()
        .fromFile(speakersFile)
        .then((input) => {
            allSpeakers = People.extract(input);   
            csv()
                .fromFile(agendaFile)
                .then((input) => {
                    return extractAgenda(input, allSpeakers, activeSpeakers, eventDates);
                })
                .then((agenda) => {




                    const people = _.uniq(activeSpeakers)
                    const speakerNames = 
                        _.sortBy(
                            _.map(people, a => {return a.name} ),
                            a => {return a});
                    const summitDates = _.uniq(eventDates)
                    const filterData = {
                        tracks: Sorter.sortData(agenda, 'track'),
                        sessions: Sorter.flatSortData(agenda, 'session'),
                        speakers: speakerNames,
                        people,
                        summitDates,
                        agenda
                    };

                    Template.clean(path.join(AGENDA_DIR, '/program'));

                    Template.write(path.join(AGENDA_DIR, 'agenda.html'), path.join(TEMPLATE_PATH, 'card.hbs'), agenda);
                    Template.write(
                        path.join(AGENDA_DIR, 'pageData.js'),
                        path.join(TEMPLATE_PATH, 'modal.hbs'),
                        filterData
                    );
                    Template.write(
                        path.join(AGENDA_DIR, 'filters.html'),
                        path.join(TEMPLATE_PATH, 'filter.hbs'),
                        filterData
                    );


                    Template.write(
                        path.join(AGENDA_DIR, 'program/pageData.js'),
                        path.join(TEMPLATE_PATH, 'details.hbs'),
                        filterData
                    );

                    Template.write(
                        path.join(AGENDA_DIR, 'program/sitemap.html'),
                        path.join(TEMPLATE_PATH, 'sitemap-html.hbs'),
                        agenda
                    );
                    Template.write(
                        path.join(AGENDA_DIR, 'program/sitemap.xml'),
                        path.join(TEMPLATE_PATH, 'sitemap-xml.hbs'),
                        agenda
                    );

                    agenda.forEach ((event, index) =>{

                        const filename= Template.createClass(event.title);
                        Template.write(
                            path.join(AGENDA_DIR, `program/${filename}.html`),
                            path.join(TEMPLATE_PATH, 'social-media.hbs'),
                        event);
                        Prettier.format(path.join(AGENDA_DIR, `program/${filename}.html`), { parser: 'html' });

                    });




                    Prettier.format(path.join(AGENDA_DIR, 'agenda.html'), { parser: 'html' });
                    Prettier.format(path.join(AGENDA_DIR, 'pageData.js'), { parser: 'flow' });
                })
                .catch((e) => {
                    console.log(e);
                    return;
                });
        });
}

exports.parse = parse;
exports.file = 'agenda.csv';
