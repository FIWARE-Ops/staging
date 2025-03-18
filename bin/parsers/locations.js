const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../dataParser');
const Sorter = require('../sort');
const Template = require('../template');
const Downloader = require('../downloader');
const TEMPLATE_PATH = 'bin/templates/locations/';
const LOCATIONS_DIR = 'directories/locations';

const IMAGE_SIZE = { height: 201, width: 360 };
const FLAG_SIZE = { height: 120, width: 120 };
const FLAGS_DIR = 'directories/people/images/flag';
const DEFAULT_IMAGE = 'image-placeholder-16x9.png';

// https://www.fiware.org/style/imgs/placeholder/image-placeholder-16x9.png

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of locations for later use
 */
function extractLocations(input) {
    const locations = [];
    input.forEach((item) => {
        const poi = {
            name: item.Name,
            city: item.City,
            type: item.Type,
            stars: parseInt(item.Stars),
             image: item.Image ? item.Image : `https://www.fiware.org/style/imgs/placeholder/${DEFAULT_IMAGE}`,
            website: item.Website,
            country: item.Country,
            flag: item['Country flag'],
            latitude: Number(item.Latitude),
            longitude: Number(item.Longitude),
            address: item.Address,
            image: item.Image,
            publish: Parser.boolean(item.Published)
        };
        if (poi.publish) {
           poi.img = poi.image;
           poi.flagUrl = 'https://www.fiware.org/wp-content/' + path.join(FLAGS_DIR, poi.flag);
            
           locations.push(poi);
        }
    });

    if (locations.length === 0) {
        console.error('ERROR: No locations uploaded.');
        process.exit(1);
    }
    console.log(locations.length, ' locations generated.');

    return locations.sort((a, b) => {
        return (String(a.name));
    });
}


function generateGeoJSON(locations) {

    // Generate Map Data
    Template.write(path.join(LOCATIONS_DIR, 'locations.json'), path.join(TEMPLATE_PATH, 'map.hbs'), locations);
    return locations;
}

/**
 * Read in the locations file and output
 * HTML and JavaScript files
 */
function parse(file) {
    return csv()
        .fromFile(file)
        .then((input) => {
            return extractLocations(input);
        })
        .then((locations) => {
            return generateGeoJSON(locations);
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'locations.csv';
