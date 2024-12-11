const csv = require('csvtojson');
const path = require('path');
const Prettier = require('prettier');
const Template = require('../template');
const TEMPLATE_PATH = 'bin/templates/main-figures/';
const INTERNAL_MAIN_FIGURES_DIR = 'welcome/directories/main-figures';
/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of key figures for later use
 */
function extractMainFigures(input) {
    const mfigures = [];
    input.forEach((item) => {
        const enabler = {
            name: item.Figure,
            value: item.Value,
            source: item.Source,
            website: item.Website
        };
        mfigures.push(enabler);
    });

    if (mfigures.length === 0) {
        console.error('ERROR: No main figures uploaded.');
        process.exit(1);
    }
    console.log(mfigures.length, ' main figures generated.');
    return mfigures;
}
function generateInternalHTML(mfigures) {
    Template.write(
        path.join(INTERNAL_MAIN_FIGURES_DIR, 'main-figures.html'),
        path.join(TEMPLATE_PATH, 'table.hbs'),
        mfigures
    );
    Prettier.format(path.join(INTERNAL_MAIN_FIGURES_DIR, 'main-figures.html'), { parser: 'html' });

    return mfigures;
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
        .then((mfigures) => {
            return generateInternalHTML(mfigures);
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'main-figures.csv';
