const csv = require('csvtojson');
const path = require('path');

const Parser = require('../dataParser');
const Sorter = require('../sort');
const Template = require('../template');
const TEMPLATE_PATH = 'bin/iHubs/';
const IHUBS_DIR = 'directories/iHubs';

const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/iHubs/images/iHub-default.png';

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of iHubs for later use
 */
function extractIHubs(input) {
    const iHubs = [];
    input.forEach((item) => {
        const iHub = {
            name: item['Name'],
            city: item['City'],
            img: item['Image'] ? item['Image'] : DEFAULT_IMAGE,
            companyLink: item['Video'],
            domain: Parser.splitStrings(item['Domain']),
            type: item['Type'],
            linkedIn: item['LinkedIn'],
            twitter: item['Twitter'],
            website: item['Website'],
            country: item['Country'],
            flag: item['Country flag'],
            content: Parser.markdown(item['Content']),
            publish: Parser.boolean(item['Published'])
        };

        if (iHub.website || iHub.twitter || iHub.linkedIn) {
            iHub.contacts = true;
        }

        if (iHub.publish) {
            iHubs.push(iHub);
        }
    });
    return iHubs.sort((a, b) => {
        return b.season - a.season;
    });
}

/**
 * Read in the iHubs file and output
 * HTML and JavaScript files
 */
function parse(file) {
    csv()
        .fromFile(file)
        .then((input) => {
            return extractIHubs(input);
        })
        .then((iHubs) => {
            const filterData = {
                types: Sorter.sortData(iHubs, 'type'),
                domains: Sorter.flatSortData(iHubs, 'domain'),
                countries: Sorter.flatSortData(iHubs, 'country'),
                iHubs
            };

            Template.write(path.join(IHUBS_DIR, 'iHubs.html'), path.join(TEMPLATE_PATH, 'card.hbs'), iHubs);
            Template.write(path.join(IHUBS_DIR, 'pageData.js'), path.join(TEMPLATE_PATH, 'modal.hbs'), filterData);
            Template.write(path.join(IHUBS_DIR, 'filters.html'), path.join(TEMPLATE_PATH, 'filter.hbs'), filterData);
        })
        .catch((e) => {
            console.log(e);
            return;
        });
}

exports.parse = parse;
