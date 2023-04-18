const csv = require('csvtojson');
const path = require('path');

const Parser = require('../dataParser');
const Sorter = require('../sort');
const Template = require('../template');
const TEMPLATE_PATH = 'bin/organisations/';
const ORGANISATIONS_DIR = 'directories/organisations';

const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/organisations/images/organisation-default.png';

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of organisations for later use
 */
function extractOrganisations(input) {
    const organisations = [];
    input.forEach((item) => {
        const organisation = {
            name: item['Name'].toUpperCase(),
            img: item['Image'] ? item['Image'] : DEFAULT_IMAGE,
            type: item['Type'],
            website: item['Website'],
            publish: Parser.boolean(item['Published'])
        };

        if (organisation.publish) {
            organisations.push(organisation);
        }
    });

    if (organisations.length === 0) {
        console.error('ERROR: No organisations uploaded.');
        process.exit(1);
    }
    console.log(organisations.length, ' organisations generated.');

    return organisations.sort((a, b) => {
        return b.name - a.name;
    });
}

/**
 * Read in the organisations file and output
 * HTML and JavaScript files
 */
function parse(file) {
    csv()
        .fromFile(file)
        .then((input) => {
            return extractOrganisations(input);
        })
        .then((organisations) => {
            const filterData = {
                types: Sorter.sortData(organisations, 'type'),
                organisations
            };

            Template.write(
                path.join(ORGANISATIONS_DIR, 'organisations.html'),
                path.join(TEMPLATE_PATH, 'card.hbs'),
                organisations
            );
            Template.write(
                path.join(ORGANISATIONS_DIR, 'pageData.js'),
                path.join(TEMPLATE_PATH, 'modal.hbs'),
                filterData
            );
            Template.write(
                path.join(ORGANISATIONS_DIR, 'filters.html'),
                path.join(TEMPLATE_PATH, 'filter.hbs'),
                filterData
            );
        })
        .catch((e) => {
            console.log(e);
            return;
        });
}

exports.parse = parse;
