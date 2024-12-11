const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../dataParser');
const Sorter = require('../sort');
const Template = require('../template');
const TEMPLATE_PATH = 'bin/templates/sponsors/';
const SPONSORS_DIR = 'directories/sponsors';

const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/sponsors/images/sponsor-default.png';

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of sponsors for later use
 */
function extractSponsors(input) {
    const sponsors = [];
    input.forEach((item) => {
        const sponsor = {
            name: item.Name,
            img: item.Image ? item.Image : DEFAULT_IMAGE,
            type: item.Type,
            exhibitor: Parser.boolean(item.Exhibitor),
            priority: item.Priority,
            website: item.Website,
            //bio: item.Description ? item.Description.replaceAll(/[\n\r]+/g, ' ').trim() : '',
            bio: Parser.markdown(item.Description),
            linkedIn: Parser.trim(item.LinkedIn),
            twitter: Parser.trim(item.Twitter),
            publish: Parser.boolean(item.Published)
        };

        if (sponsor.publish) {
            sponsors.push(sponsor);
        }
    });

    if (sponsors.length === 0) {
        console.error('ERROR: No sponsors uploaded.');
        process.exit(1);
    }
    console.log(sponsors.length, ' sponsors generated.');

    return sponsors.sort((a, b) => {
        if (a.priority !== b.priority) {
            return a.priority - b.priority;
        }
        return String(a.name.toLowerCase()).localeCompare(b.name.toLowerCase());
    });
}

function generateHTML(sponsors) {
    const filterData = {
        types: Sorter.sortData(sponsors, 'type'),
        names: Sorter.sortData(sponsors, 'name'),
        sponsors
    };

    Template.write(path.join(SPONSORS_DIR, 'sponsors.html'), path.join(TEMPLATE_PATH, 'card.hbs'), sponsors);
    Template.write(path.join(SPONSORS_DIR, 'pageData.js'), path.join(TEMPLATE_PATH, 'modal.hbs'), filterData);
    Template.write(path.join(SPONSORS_DIR, 'filters.html'), path.join(TEMPLATE_PATH, 'filter.hbs'), filterData);

    Prettier.format(path.join(SPONSORS_DIR, 'sponsors.html'), { parser: 'html' });
    Prettier.format(path.join(SPONSORS_DIR, 'pageData.js'), { parser: 'flow' });
    Prettier.format(path.join(SPONSORS_DIR, 'filters.html'), { parser: 'html' });
    return sponsors;
}

/**
 * Read in the sponsors file and output
 * HTML and JavaScript files
 */
function parse(file) {
    return csv()
        .fromFile(file)
        .then((input) => {
            return extractSponsors(input);
        })
        .then((sponsors) => {
            return generateHTML(sponsors);
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'sponsors.csv';
