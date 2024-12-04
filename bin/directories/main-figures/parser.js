const csv = require('csvtojson');
const path = require('path');
const Prettier = require('prettier');
const Template = require('../../template');
const TEMPLATE_PATH = 'bin/directories/main-figures/';
const FIGURES_DIR = 'directories/main-figures';
/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of main key figures for later use
 */
function extractMainFigures(input) {
    const MainFigures = [];
    input.forEach((item) => {
        const enabler = {
            name: item.Figure,
            value: item.Value,
            source: item.Source,
            owner: item.Website
        };
        MainFigures.push(enabler);
    });

    if (MainFigures.length === 0) {
        console.error('ERROR: No MainFigures uploaded.');
        process.exit(1);
    }
    console.log(MainFigures.length, ' MainFigures generated.');
    return MainFigures;
}

/**
 * Read in the figures file and output
 * HTML and JavaScript files
 */
function parse(file) {
    return csv()
        .fromFile(file)
        .then((input) => {
            return extractMainFigures(input);
        })
        .then((MainFigures) => {
            Template.write(
                path.join('welcome', FIGURES_DIR, 'main-figures.html'),
                path.join(TEMPLATE_PATH, 'table.hbs'),
                MainFigures
            );
            Prettier.format(path.join('welcome', FIGURES_DIR, 'main-figures.html'), { parser: 'html' });
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'main-figures.csv';
