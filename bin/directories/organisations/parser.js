const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../../dataParser');
const Sorter = require('../../sort');
const Template = require('../../template');
const Community = require('../community/parser');
const TEMPLATE_PATH = 'bin/directories/organisations/';
const ORGANISATIONS_DIR = 'directories/organisations';

const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/organisations/images/organisation-default.png';

const regex = /([^a-zA-Z0-9À-ÿ])/gi;

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of organisations for later use
 */
function extractOrganisations(input) {
    const organisations = [];
    input.forEach((item) => {
        const organisation = {
            upperName: item.Name.toUpperCase(),
            name: item.Name,
            img: item.Image ? item.Image : DEFAULT_IMAGE,
            type: item.Type,
            website: item.Website,
            country: item.Country,
            latitude: Number(item.Latitude),
            longitude: Number(item.Longitude),
            publish: Parser.boolean(item.Published)
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
        let aName = String(a.name).replace(regex, '');
        let bName = String(b.name).replace(regex, '');

        if (a.type === 'Platinum') {
            aName = '000-' + aName;
        }
        if (b.type === 'Platinum') {
            bName = '000-' + bName;
        }

        if (a.type === 'Gold') {
            aName = '001-' + aName;
        }
        if (b.type === 'Gold') {
            bName = '001-' + bName;
        }

        if (a.type === 'Gold SEU') {
            aName = '002-' + aName;
        }
        if (b.type === 'Gold SEU') {
            bName = '002-' + bName;
        }

        return String(aName.toLowerCase()).localeCompare(bName.toLowerCase());
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

            Prettier.format(path.join(ORGANISATIONS_DIR, 'organisations.html'), { parser: 'html' });
            Prettier.format(path.join(ORGANISATIONS_DIR, 'pageData.js'), { parser: 'flow' });
            Prettier.format(path.join(ORGANISATIONS_DIR, 'filters.html'), { parser: 'html' });

            // Generate Maps
            Template.write(
                path.join(ORGANISATIONS_DIR, 'organisations.json'),
                path.join(TEMPLATE_PATH, 'map.hbs'), 
                organisations
            );
            const searchObj = Template.getSearchKeys(path.join(ORGANISATIONS_DIR, 'organisations.json'));
            Template.write(path.join(ORGANISATIONS_DIR, 'search.js'),
                path.join(TEMPLATE_PATH, 'search.hbs'), 
                {
                    keys: {
                        members: Object.keys(searchObj)
                    },
                    data: searchObj
                }
            );
            Community.generateMap();
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'organisations.csv';
