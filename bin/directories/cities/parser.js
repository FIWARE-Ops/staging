const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../../dataParser');
const Sorter = require('../../sort');
const Template = require('../../template');
const TEMPLATE_PATH = 'bin/directories/cities/';
const CITIES_DIR = 'directories/cities';

const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/cities/images/city-default.png';

function getExcerpt(item){
    let text =  Parser.textOnly(item['City Strategy Description']);
    const next = text.indexOf(".", 40);
    return text.substring(0, next +1)
}

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of cities for later use
 */
function extractcities(input) {
    const cities = [];
    input.forEach((item) => {
        const city = {
            city: item['City'],
            img: item['Cover'] ? item['Cover'] : DEFAULT_IMAGE,
            thumb: item['Thumb'] ? item['Thumb'] : DEFAULT_IMAGE,
            logo: item['Logo'] ? item['Logo'] : DEFAULT_IMAGE,
            domain: Parser.splitStrings(item['Domain']),
            type: item['Region'],
            country: item['Country'],
            lat:  Number(item['Latitude']),
            lng:  Number(item['Longitude']),
            flag: item['Country Flag'],
            excerpt: getExcerpt(item),
            cityStrategy: Parser.markdown(item['City Strategy Description']),
            cityWebsite: item['City Strategy Website'],
            title1: item['Solution 1 Title'],
            //description1: Parser.markdown(item['Solution 1 Description ']),
            website1: item['Solution 1 Website '],
            marketplace1: item['Marketplace 1'],
            story1: item['Impact Story 1'],
            title2: item['Solution 2 Title'],
            //description2: Parser.markdown(item['Solution 2 Description']),
            website2: item['Solution 2 Website '],
            marketplace2: item['Marketplace 2'],
            story2: item['Impact Story 2'],
            publish: Parser.boolean(item['Published']),
        };


        const filename= Template.createClass(city.type) + '/' + Template.createClass(city.city);               
        city.social = `/wp-content/directories/cities/${filename}.html`

        if (city.publish) {
            cities.push(city);
        }
    });

    if (cities.length === 0) {
        console.error('ERROR: No cities uploaded.');
        process.exit(1);
    }
    console.log(cities.length, ' cities generated.');

    return cities.sort((a, b) => {
        return ('' +  a.country +  a.city).localeCompare( b.country + b.city);
    });
}

/**
 * Read in the cities file and output
 * HTML and JavaScript files
 */
function parse(file) {
    csv()
        .fromFile(file)
        .then((input) => {
            return extractcities(input);
        })
        .then((cities) => {
            const filterData = {
                types: Sorter.sortData(cities, 'type'),
                domains: Sorter.flatSortData(cities, 'domain'),
                countries: Sorter.flatSortData(cities, 'country'),
                cities
            };

            Template.write(path.join(CITIES_DIR, 'cities.html'), path.join(TEMPLATE_PATH, 'card.hbs'), cities);
            Template.write(path.join(CITIES_DIR, 'pageData.js'), path.join(TEMPLATE_PATH, 'modal.hbs'), filterData);
            Template.write(path.join(CITIES_DIR, 'filters.html'), path.join(TEMPLATE_PATH, 'filter.hbs'), filterData);

            Prettier.format(path.join(CITIES_DIR, 'cities.html'), { parser: 'html' });
            Prettier.format(path.join(CITIES_DIR, 'pageData.js'), { parser: 'flow' });
            Prettier.format(path.join(CITIES_DIR, 'filters.html'), { parser: 'html' });
       
            Template.write(
                path.join(CITIES_DIR, 'city-details/pageData.js'),
                path.join(TEMPLATE_PATH, 'details.hbs'),
                cities
            );

            Template.write(
                path.join(CITIES_DIR, 'sitemap.html'),
                path.join(TEMPLATE_PATH, 'sitemap.hbs'),
                cities
            );

            cities.forEach ((city, index) =>{

                const filename= Template.createClass(city.type) + '/' + Template.createClass(city.city);
                Template.write(
                    path.join(CITIES_DIR, `${filename}.html`),
                    path.join(TEMPLATE_PATH, 'social-media.hbs'),
                city);
                Prettier.format(path.join(CITIES_DIR, `${filename}.html`), { parser: 'html' });

            });


        })
        .catch((e) => {
            console.log(e);
            return;
        });
}

exports.parse = parse;
exports.file = 'cities.csv';
