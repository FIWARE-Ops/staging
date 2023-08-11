const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Static = require('./staticData');
const Parser = require('../dataParser');
const Sorter = require('../sort');
const Template = require('../template');
const TEMPLATE_PATH = 'bin/webinars/';
const WEBINARS_DIR = 'directories/webinars';

const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/webinars/images/webinar-default.png';

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of webinars for later use
 */
function extractWebinars(input) {
    const webinars = [];
    input.forEach((item) => {
        const webinar = {
            season: item['Season'],
            name: item['Name'],
            img: item['Image'] ? item['Image'] : DEFAULT_IMAGE,
            companyLink: item['Video'],
            domain: Parser.splitStrings(item['Audience']),
            type: item['Type'],
            badge: Static.getBadge(item['Type']),
            technology: Parser.splitStrings(item['Technology']),
            year: parseInt(item['Year']),
            difficulty: parseInt(item['Difficulty']),
            content: Parser.markdown(item['Content']),
            length: item['Length'],
            publish: Parser.boolean(item['Published'])
        };
        if (webinar.publish) {
            webinars.push(webinar);
        }
    });

    if (webinars.length === 0) {
        console.error('ERROR: No webinars uploaded.');
        process.exit(1);
    }
    console.log(webinars.length, ' webinars generated.');

    return webinars.sort((a, b) => {
        return b.season - a.season;
    });
}

/**
 * Read in the webinars file and output
 * HTML and JavaScript files
 */
function parse(file) {
    csv()
        .fromFile(file)
        .then((input) => {
            return extractWebinars(input);
        })
        .then((webinars) => {
            const filterData = {
                types: Sorter.sortData(webinars, 'type'),
                technologies: Sorter.flatSortData(webinars, 'technology'),
                domains: Sorter.flatSortData(webinars, 'domain'),
                webinars
            };

            Template.write(path.join(WEBINARS_DIR, 'webinars.html'), path.join(TEMPLATE_PATH, 'card.hbs'), webinars);
            Template.write(path.join(WEBINARS_DIR, 'pageData.js'), path.join(TEMPLATE_PATH, 'modal.hbs'), filterData);
            Template.write(path.join(WEBINARS_DIR, 'filters.html'), path.join(TEMPLATE_PATH, 'filter.hbs'), filterData);

            Prettier.format(path.join(WEBINARS_DIR, 'webinars.html'), { parser: 'html' });
            Prettier.format(path.join(WEBINARS_DIR, 'pageData.js'), { parser: 'flow' });
            Prettier.format(path.join(WEBINARS_DIR, 'filters.html'), { parser: 'html' });
        })
        .catch((e) => {
            console.log(e);
            return;
        });
}

exports.parse = parse;
