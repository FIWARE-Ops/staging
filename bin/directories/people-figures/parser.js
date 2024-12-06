const csv = require('csvtojson');
const path = require('path');
const Prettier = require('prettier');
const Template = require('../../template');
const TEMPLATE_PATH = 'bin/directories/people-figures/';
const FIGURES_DIR = 'directories/people-figures';
const PEOPLE_ASSETS_DIR = 'directories/people/images/200px';
/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of key figures for later use
 */
function extractPeopleFigures(input) {
    const pfigures = [];
    input.forEach((item) => {
        const figure = {
            name: item.Figure,
            value: item.Value,
            source: item.Source,
            url: item.Url,
            owner: item.Owner,
            image: item['Profile Picture']
        };

        figure.img = 'https://www.fiware.org/wp-content/' + path.join(PEOPLE_ASSETS_DIR, figure.image || '');
        pfigures.push(figure);
    });

    if (pfigures.length === 0) {
        console.error('ERROR: No people figures uploaded.');
        process.exit(1);
    }
    console.log(pfigures.length, ' people figures generated.');
    return pfigures;
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
        .then((pfigures) => {
            Template.write(
                path.join('welcome', FIGURES_DIR, 'people-figures.html'),
                path.join(TEMPLATE_PATH, 'table.hbs'),
                pfigures
            );
            Prettier.format(path.join('welcome', FIGURES_DIR, 'people-figures.html'), { parser: 'html' });
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'people-figures.csv';
