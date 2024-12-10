const csv = require('csvtojson');
const path = require('path');
const Prettier = require('prettier');
const Template = require('../../template');
const TEMPLATE_PATH = 'bin/directories/press/';
const PRESS_DIR = 'directories/press';
const PEOPLE_ASSETS_DIR = 'directories/people/images/200px';
/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of key figures for later use
 */
function extractPeopleFigures(input) {
    const press = [];
    input.forEach((item) => {
        const figure = {
            date: item.Date,
            title: item.Title,
            link: item.Link,
            topic: item.Url
        };
        
        press.push(figure);
    });

    if (press.length === 0) {
        console.error('ERROR: No press releases uploaded.');
        process.exit(1);
    }
    console.log(press.length, ' press releases generated.');
    return press;
}

/**
 * Read in the figures file and output
 * HTML and JavaScript files
 */
function parse(file) {
    return csv()
        .fromFile(file)
        .then((input) => {
            return extractPeopleFigures(input);
        })
        .then((press) => {
            Template.write(
                path.join('welcome', PRESS_DIR, 'press.html'),
                path.join(TEMPLATE_PATH, 'table.hbs'),
                press
            );
            Prettier.format(path.join('welcome', PRESS_DIR, 'press.html'), { parser: 'html' });
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'press.csv';
