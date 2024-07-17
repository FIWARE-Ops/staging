const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../../dataParser');
const Sorter = require('../../sort');
const Template = require('../../template');
const TEMPLATE_PATH = 'bin/directories/sponsors/';
const SPONSORS_DIR = 'directories/sponsors';

const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/sponsors/images/sponsor-default.png';

const regex = /([^a-zA-Z0-9À-ÿ])/gi;

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of sponsors for later use
 */
function extractSponsors(input) {
    const sponsors = [];
    input.forEach((item) => {
        const sponsor = {
            name: item.Name.toUpperCase(),
            img: item.Image ? item.Image : DEFAULT_IMAGE,
            type: item.Type,
            website: item.Website,
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
        let aName = String(a.name).replace(regex, '');
        let bName = String(b.name).replace(regex, '');

        if (a.type === 'Hosting Partner') {
            aName = '000-' + aName;
        }
        if (b.type === 'Hosting Partner') {
            bName = '000-' + bName;
        }

        if (a.type === 'Official Partner') {
            aName = '001-' + aName;
        }
        if (b.type === 'Official Partner') {
            bName = '001-' + bName;
        }

        if (a.type === 'Prestige Sponsor') {
            aName = '002-' + aName;
        }
        if (b.type === 'Prestige Sponsor') {
            bName = '002-' + bName;
        }

        if (a.type === 'Premiere Sponsor') {
            aName = '003-' + aName;
        }
        if (b.type === 'Premiere Sponsor') {
            bName = '003-' + bName;
        }

        if (a.type === 'Basic Sponsor') {
            aName = '004-' + aName;
        }
        if (b.type === 'Basic Sponsor') {
            bName = '004-' + bName;
        }

        if (a.type === 'Media Partner') {
            aName = '005-' + aName;
        }
        if (b.type === 'Media Partner') {
            bName = '005-' + bName;
        }

         if (a.type === 'Exhibitor') {
            aName = '006-' + aName;
        }
        if (b.type === 'Exhibitor') {
            bName = '006-' + bName;
        }
        return String(aName.toLowerCase()).localeCompare(bName.toLowerCase());
    });
}

/**
 * Read in the sponsors file and output
 * HTML and JavaScript files
 */
function parse(file) {
    csv()
        .fromFile(file)
        .then((input) => {
            return extractSponsors(input);
        })
        .then((sponsors) => {
            const filterData = {
                types: Sorter.sortData(sponsors, 'type'),
                sponsors
            };

            Template.write(
                path.join(SPONSORS_DIR, 'sponsors.html'),
                path.join(TEMPLATE_PATH, 'card.hbs'),
                sponsors
            );
            Template.write(
                path.join(SPONSORS_DIR, 'pageData.js'),
                path.join(TEMPLATE_PATH, 'modal.hbs'),
                filterData
            );
            Template.write(
                path.join(SPONSORS_DIR, 'filters.html'),
                path.join(TEMPLATE_PATH, 'filter.hbs'),
                filterData
            );

            Prettier.format(path.join(SPONSORS_DIR, 'sponsors.html'), { parser: 'html' });
            Prettier.format(path.join(SPONSORS_DIR, 'pageData.js'), { parser: 'flow' });
            Prettier.format(path.join(SPONSORS_DIR, 'filters.html'), { parser: 'html' });
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'sponsors.csv';
