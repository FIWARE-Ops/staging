const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../dataParser');
const Sorter = require('../sort');
const Template = require('../template');
const Downloader = require('../downloader');
const TEMPLATE_PATH = 'bin/templates/trainings/';
const TRAININGS_DIR = 'directories/trainings';

const IMAGE_SIZE = { height: 201, width: 360 };
const FLAG_SIZE = { height: 120, width: 120 };
const FLAGS_DIR = 'directories/people/images/flag';
const DEFAULT_IMAGE = 'image-placeholder-16x9.png';
const ASSETS_DIR = 'directories/trainings/images';


// https://www.fiware.org/style/imgs/placeholder/image-placeholder-16x9.png

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of trainings for later use
 */
function extractTrainings(input) {
    const trainings = [];
    input.forEach((item) => {
        const poi = {
            name: item.Name,
            city: item.City,
            image: item.Image ? item.Image : `https://www.fiware.org/style/imgs/placeholder/${DEFAULT_IMAGE}`,
            website: item.Website,
            country: item.Country,
            flag: item['Country flag'],
            latitude: Number(item.Latitude),
            longitude: Number(item.Longitude),
            image: item.Image,
            publish: Parser.boolean(item.Published)
        };
        if (poi.publish) {
           poi.img = 'https://www.fiware.org/' + path.join(ASSETS_DIR, poi.image); 
           poi.flagUrl = 'https://www.fiware.org/wp-content/' + path.join(FLAGS_DIR, poi.flag);
            
           trainings.push(poi);
        }
    });

    if (trainings.length === 0) {
        console.error('ERROR: No trainings uploaded.');
        process.exit(1);
    }
    console.log(trainings.length, ' trainings generated.');

    return trainings.sort((a, b) => {
        return (String(a.name));
    });
}


function generateGeoJSON(trainings) {

    // Generate Map Data
    Template.write(path.join(TRAININGS_DIR, 'trainings.json'), path.join(TEMPLATE_PATH, 'map.hbs'), trainings);
     const searchObj = Template.getSearchKeys(path.join(TRAININGS_DIR, 'trainings.json'));
    Template.write(path.join(TRAININGS_DIR, 'search.js'), path.join(TEMPLATE_PATH, 'search.hbs'), {
        keys: {
            trainings: Object.keys(searchObj)
        },
        data: searchObj
    });

    return trainings;
}


function uploadImages(trainings) {
    return Downloader.checkImages(trainings)
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

function uploadFlags(trainings) {
    return Downloader.checkImages(trainings, 'flagUrl', 'flag')
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

/**
 * Read in the trainings file and output
 * HTML and JavaScript files
 */
function parse(file) {
    return csv()
        .fromFile(file)
        .then((input) => {
            return extractTrainings(input);
        })
        .then((trainings) => {
            return generateGeoJSON(trainings);
        })
        .then((trainings) => {
            Downloader.emptyAssets();
            return uploadImages(trainings).then(() => {
                return trainings;
            });
        })
        .then((trainings) => {
            return uploadFlags(trainings).then(() => {
                return trainings;
            });
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'trainings.csv';
