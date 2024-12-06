const csv = require('csvtojson');
const path = require('path');
const Prettier = require('prettier');
const Template = require('../../template');
const TEMPLATE_PATH = 'bin/directories/key-figures/';
const FIGURES_DIR = 'directories/key-figures';
const PEOPLE_ASSETS_DIR = 'directories/people/images/200px';
/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of key figures for later use
 */
function extractFigures(input) {
    const figures = [];
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
        figures.push(figure);
    });

    if (figures.length === 0) {
        console.error('ERROR: No figures uploaded.');
        process.exit(1);
    }
    console.log(figures.length, ' figures generated.');
    return figures;
}

/**
 * Read in the figures file and output
 * HTML and JavaScript files
 */
function parse(file) {
    return csv()
        .fromFile(file)
        .then((input) => {
            return extractFigures(input);
        })
        .then((figures) => {
            Template.write(
                path.join('welcome', FIGURES_DIR, 'figures.html'),
                path.join(TEMPLATE_PATH, 'table.hbs'),
                figures
            );
            Prettier.format(path.join('welcome', FIGURES_DIR, 'figures.html'), { parser: 'html' });
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'figures.csv';
