const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../../dataParser');
const Sorter = require('../../sort');
const Template = require('../../template');
const Downloader = require('../../downloader');
const TEMPLATE_PATH = 'bin/directories/cities/';
const CITIES_DIR = 'directories/cities';
const FLAGS_DIR = 'directories/people/images/flag';

const Community = require('../community/parser');
const THUMBS_DIR = 'directories/cities/images/thumb';
const IMAGES_DIR = 'directories/cities/images/cover';
const LOGOS_DIR = 'directories/cities/logo';

const THUMB_SIZE = { height: 179, width: 320 };
const IMAGE_SIZE = { height: 670, width: 1199 };
const FLAG_SIZE = { height: 120, width: 120 };
const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/cities/images/city-default.png';

function getExcerpt(item) {
    const text = Parser.textOnly(item['City Strategy Description']);
    const next = text.indexOf('.', 40);
    return text.substring(0, next + 1);
}

function trunc(value) {
    return Math.trunc(value * 10) / 10;
}

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of cities for later use
 */
function extractCities(input) {
    const cities = [];
    input.forEach((item) => {
        const city = {
            city: item.City,
            image: item.Cover ? item.Cover : '',
            thumb: item.Thumb ? item.Thumb : '',
            logo: item.Logo ? item.Logo : '',
            domain: Parser.splitStrings(item.Domain),
            type: item.Region,
            country: item.Country,
            lat: trunc(Number(item.Latitude)),
            lng: trunc(Number(item.Longitude)),
            flag: item['Country Flag'],
            excerpt: getExcerpt(item),
            cityStrategy: Parser.markdown(item['City Strategy Description']),
            cityWebsite: item['City Strategy Website'],
            title1: Parser.textOnly(item['Solution 1 Title']),
            //description1: Parser.markdown(item['Solution 1 Description ']),
            website1: item['Solution 1 Website'],
            marketplace1: item['Marketplace 1'],
            story1: item['Impact Story 1'],
            title2: Parser.textOnly(item['Solution 2 Title']),
            //description2: Parser.markdown(item['Solution 2 Description']),
            website2: item['Solution 2 Website'],
            marketplace2: item['Marketplace 2'],
            story2: item['Impact Story 2'],
            publish: Parser.boolean(item.Published)
        };

        const filename = Template.createClass(city.type) + '/' + Template.createClass(city.city);
        city.social = `/wp-content/directories/cities/${filename}.html`;

        if (city.publish) {
            city.flagUrl = 'https://www.fiware.org/wp-content/' + path.join(FLAGS_DIR, city.flag);
            city.thumbnail = 'https://www.fiware.org/wp-content/' + path.join(THUMBS_DIR, city.thumb);
            city.img = 'https://www.fiware.org/wp-content/' + path.join(IMAGES_DIR, city.image);
            city.logoUrl = 'https://www.fiware.org/wp-content/' + path.join(LOGOS_DIR, city.logo);
            cities.push(city);
        }
    });

    if (cities.length === 0) {
        console.error('ERROR: No cities uploaded.');
        process.exit(1);
    }
    console.log(cities.length, ' cities generated.');

    return cities.sort((a, b) => {
        return (String(a.country) + String(a.city)).localeCompare(String(b.country) + String(b.city));
    });
}

function uploadImages(cities) {
    return Downloader.checkImages(cities, 'img', 'image')
        .then((missingImages) => {
            Downloader.logMissing(missingImages);
            return Downloader.validateUploads(missingImages);
        })
        .then((uploads) => {
            Downloader.uploadImages(uploads, path.join('assets', IMAGES_DIR), IMAGE_SIZE);
            Downloader.logUploads(uploads);
            return uploads;
        });
}

function uploadThumbnails(cities) {
    return Downloader.checkImages(cities, 'thumbnail', 'thumb')
        .then((missingImages) => {
            Downloader.logMissing(missingImages);
            return Downloader.validateUploads(missingImages);
        })
        .then((uploads) => {
            Downloader.uploadImages(uploads, path.join('assets', THUMBS_DIR), THUMB_SIZE);
            Downloader.logUploads(uploads);
            return uploads;
        });
}

function uploadLogos(cities) {
    return Downloader.checkImages(cities, 'logoUrl', 'logo')
        .then((missingImages) => {
            Downloader.logMissing(missingImages);
            return Downloader.validateUploads(missingImages);
        })
        .then((uploads) => {
            Downloader.uploadImages(uploads, path.join('assets', LOGOS_DIR));
            Downloader.logUploads(uploads);
            return uploads;
        });
}

function uploadFlags(cities) {
    return Downloader.checkImages(cities, 'flagUrl', 'flag')
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

function generateHTML(cities) {
    const filterData = {
        types: Sorter.sortData(cities, 'type'),
        domains: Sorter.flatSortData(cities, 'domain'),
        countries: Sorter.flatSortData(cities, 'country'),
        cities
    };

    filterData.types.forEach((type) => {
        Template.clean(path.join(CITIES_DIR, type));
    });

    Template.write(path.join(CITIES_DIR, 'cities.html'), path.join(TEMPLATE_PATH, 'card.hbs'), cities);
    Template.write(path.join(CITIES_DIR, 'pageData.js'), path.join(TEMPLATE_PATH, 'modal.hbs'), filterData);
    Template.write(path.join(CITIES_DIR, 'filters.html'), path.join(TEMPLATE_PATH, 'filter.hbs'), filterData);

    Prettier.format(path.join(CITIES_DIR, 'cities.html'), { parser: 'html' });
    Prettier.format(path.join(CITIES_DIR, 'pageData.js'), { parser: 'flow' });
    Prettier.format(path.join(CITIES_DIR, 'filters.html'), { parser: 'html' });

    Template.write(path.join(CITIES_DIR, 'city-details/pageData.js'), path.join(TEMPLATE_PATH, 'details.hbs'), cities);

    Template.write(path.join(CITIES_DIR, 'sitemap.html'), path.join(TEMPLATE_PATH, 'sitemap-html.hbs'), cities);
    Template.write(path.join(CITIES_DIR, 'sitemap.xml'), path.join(TEMPLATE_PATH, 'sitemap-xml.hbs'), cities);

    cities.forEach((city) => {
        const filename = Template.createClass(city.type) + '/' + Template.createClass(city.city);
        Template.write(path.join(CITIES_DIR, `${filename}.html`), path.join(TEMPLATE_PATH, 'social-media.hbs'), city);
        Prettier.format(path.join(CITIES_DIR, `${filename}.html`), { parser: 'html' });
    });

    // Generate Map Data
    Template.write(path.join(CITIES_DIR, 'cities.json'), path.join(TEMPLATE_PATH, 'map.hbs'), cities);
    const searchObj = Template.getSearchKeys(path.join(CITIES_DIR, 'cities.json'));
    Template.write(path.join(CITIES_DIR, 'search.js'), path.join(TEMPLATE_PATH, 'search.hbs'), {
        keys: {
            cities: Object.keys(searchObj)
        },
        data: searchObj
    });
    Community.generateMap();
    return cities;
}

/**
 * Read in the cities file and output
 * HTML and JavaScript files
 */
function parse(file) {
    return csv()
        .fromFile(file)
        .then((input) => {
            return extractCities(input);
        })
        .then((cities) => {
            return generateHTML(cities);
        })
        .then((cities) => {
            Downloader.emptyAssets();
            return uploadImages(cities).then(() => {
                return cities;
            });
        })
        .then((cities) => {
            return uploadThumbnails(cities).then(() => {
                return cities;
            });
        })
        .then((cities) => {
            return uploadLogos(cities).then(() => {
                return cities;
            });
        })
        .then((cities) => {
            return uploadFlags(cities).then(() => {
                return cities;
            });
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'cities.csv';
