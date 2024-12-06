const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../../dataParser');
const Sorter = require('../../sort');
const Template = require('../../template');
const Downloader = require('../../downloader');
const Community = require('../community/parser');
const TEMPLATE_PATH = 'bin/directories/ihubs/';
const IHUBS_DIR = 'directories/ihubs';
const ASSETS_DIR = 'directories/ihubs/images';
const FLAGS_DIR = 'directories/people/images/flag';

const IMAGE_SIZE = { height: 201, width: 360 };
const FLAG_SIZE = { height: 120, width: 120 };
const DEFAULT_IMAGE = 'ihub-default.png';

function trunc(value) {
    return Math.trunc((value - 0.005) * 1000) / 1000;
}

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of iHubs for later use
 */
function extractIHubs(input) {
    const iHubs = [];
    input.forEach((item) => {
        const iHub = {
            name: item.Name,
            city: item.City,
            image: item.Image ? item.Image : DEFAULT_IMAGE,
            domain: Parser.splitStrings(item.Domain),
            type: item.Type,
            linkedIn: item.LinkedIn,
            twitter: item.Twitter,
            website: item.Website,
            country: item.Country,
            flag: item['Country flag'],
            content: Parser.markdown(item.Content),
            publish: Parser.boolean(item.Published),
            latitude: trunc(Number(item.Latitude)),
            longitude: trunc(Number(item.Longitude))
        };

        if (iHub.website || iHub.twitter || iHub.linkedIn) {
            iHub.contacts = true;
        }

        if (iHub.publish) {
            iHub.img = 'https://www.fiware.org/wp-content/' + path.join(ASSETS_DIR, iHub.image);
            iHub.flagUrl = 'https://www.fiware.org/wp-content/' + path.join(FLAGS_DIR, iHub.flag);
            iHubs.push(iHub);
        }
    });

    if (iHubs.length === 0) {
        console.error('ERROR: No iHubs uploaded.');
        process.exit(1);
    }
    console.log(iHubs.length, ' iHubs generated.');

    return iHubs.sort((a, b) => {
        return String(a.name).localeCompare(b.name);
    });
}

function uploadImages(iHubs) {
    return Downloader.checkImages(iHubs)
        .then((missingImages) => {
            Downloader.logMissing(missingImages);
            return Downloader.validateUploads(missingImages);
        })
        .then((uploads) => {
            Downloader.uploadImages(uploads, path.join('assets', ASSETS_DIR), IMAGE_SIZE);
            Downloader.logUploads(uploads);
            return uploads;
        });
}

function uploadFlags(iHubs) {
    return Downloader.checkImages(iHubs, 'flagUrl', 'flag')
        .then((missingImages) => {
            Downloader.logMissing(missingImages);
            return Downloader.validateUploads(missingImages);
        })
        .then((uploads) => {
            Downloader.uploadImages(uploads, path.join('assets', FLAGS_DIR), FLAG_SIZE);
            Downloader.logUploads(uploads);
            return uploads;
        });
}

function generateHTML(iHubs) {
    const filterData = {
        types: Sorter.sortData(iHubs, 'type'),
        domains: Sorter.flatSortData(iHubs, 'domain'),
        countries: Sorter.flatSortData(iHubs, 'country'),
        iHubs
    };

    Template.write(path.join(IHUBS_DIR, 'iHubs.html'), path.join(TEMPLATE_PATH, 'card.hbs'), iHubs);
    Template.write(path.join(IHUBS_DIR, 'pageData.js'), path.join(TEMPLATE_PATH, 'modal.hbs'), filterData);
    Template.write(path.join(IHUBS_DIR, 'filters.html'), path.join(TEMPLATE_PATH, 'filter.hbs'), filterData);

    Prettier.format(path.join(IHUBS_DIR, 'iHubs.html'), { parser: 'html' });
    Prettier.format(path.join(IHUBS_DIR, 'pageData.js'), { parser: 'flow' });
    Prettier.format(path.join(IHUBS_DIR, 'filters.html'), { parser: 'html' });

    // Generate Maps
    Template.write(path.join(IHUBS_DIR, 'iHubs.json'), path.join(TEMPLATE_PATH, 'map.hbs'), iHubs);
    const searchObj = Template.getSearchKeys(path.join(IHUBS_DIR, 'iHubs.json'));
    Template.write(path.join(IHUBS_DIR, 'search.js'), path.join(TEMPLATE_PATH, 'search.hbs'), {
        keys: {
            ihubs: Object.keys(searchObj)
        },
        data: searchObj
    });
    Community.generateMap();
    return iHubs;
}

/**
 * Read in the iHubs file and output
 * HTML and JavaScript files
 */
function parse(file) {
    return csv()
        .fromFile(file)
        .then((input) => {
            return extractIHubs(input);
        })
        .then((iHubs) => {
            return generateHTML(iHubs);
        })
        .then((iHubs) => {
            return uploadImages(iHubs).then(() => {
                return iHubs;
            });
        })
        .then((iHubs) => {
            return uploadFlags(iHubs).then(() => {
                return iHubs;
            });
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'iHubs.csv';
