const csv = require('csvtojson');
const path = require('path');
const Prettier = require('prettier');
const Template = require('../template');
const TEMPLATE_PATH = 'bin/templates/directory-figures/';
const DIRECTORY_FIGURES_DIR = 'directories/directory-figures';
const INTERNAL_FIGURES_DIR = 'welcome/directories/directory-figures';
const PEOPLE_ASSETS_DIR = 'directories/people/images/200px';
/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of key figures for later use
 */
function extractDirectoryFigures(input) {
    const dfigures = [];
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
        dfigures.push(figure);
    });

    if (dfigures.length === 0) {
        console.error('ERROR: No directory figures uploaded.');
        process.exit(1);
    }
    console.log(dfigures.length, ' directory figures generated.');
    return dfigures;
}

function generateInternalHTML(dfigures) {
    Template.write(
        path.join(INTERNAL_FIGURES_DIR, 'directory-figures.html'),
        path.join(TEMPLATE_PATH, 'table.hbs'),
        dfigures
    );
    Prettier.format(path.join(INTERNAL_FIGURES_DIR, 'directory-figures.html'), { parser: 'html' });
    return dfigures;
}

/**
 * Read in the figures file and output
 * HTML and JavaScript files
 */
function parse(file) {
    return csv()
        .fromFile(file)
        .then((input) => {
            return extractDirectoryFigures(input);
        })
        .then((dfigures) => {
            return generateInternalHTML(dfigures);
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'directory-figures.csv';
