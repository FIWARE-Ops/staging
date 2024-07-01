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

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of each project for later use
 */
function extractAgenda(input, speakers) {
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
                return !!speaker ? speaker : { name, img: People.DEFAULT_IMAGE };
            });

            event.startTime = Parser.addTime(event.date, event.start);
            agenda.push(event);
        }
    });

    if (agenda.length === 0) {
        console.error('ERROR: No agenda uploaded.');
        process.exit(1);
    }
    console.log(agenda.length, ' agenda items generated.');

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
    let speakers = null;

    csv()
        .fromFile(speakersFile)
        .then((input) => {
            speakers = People.extract(input);

            speakerNames = _.map(speakers, function (speaker) {
                return speaker.name;
            });

            csv()
                .fromFile(agendaFile)
                .then((input) => {
                    return extractAgenda(input, speakers);
                })
                .then((agenda) => {

                    const filterData = {
                        types: Sorter.sortData(agenda, 'track'),
                        domains: Sorter.flatSortData(agenda, 'session'),
                        technologies: speakerNames,
                        agenda
                    };

                    Template.clean(path.join(AGENDA_DIR, '/agenda'));

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
