const csv = require('csvtojson');
const path = require('path');
const _ = require('underscore');
const Prettier = require('prettier');
const People = require('./people');
const Template = require('../template');
const TEMPLATE_PATH = 'bin/templates/directory-figures/';
const INTERNAL_FIGURES_DIR = 'welcome/directories/directory-figures';
/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of key figures for later use
 */
function extractDirectoryFigures(input, team) {
    const dfigures = [];
    input.forEach((item) => {
        const figure = {
            name: item.Figure,
            value: item.Value,
            source: item.Source,
            url: item.Url,
            owner: item.Owner
        };

        if (figure.owner !== '') {
            const owner = _.findWhere(team, { name: figure.owner });
            if (owner) {
                figure.image = owner.img;
            } else {
                console.log(`${figure.owner} not found`);
            }
        }
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
function parse(file, teamFile) {
    return csv()
        .fromFile(teamFile)
        .then((input) => {
            const team = People.extract(input, true);
            return csv()
                .fromFile(file)
                .then((input) => {
                    return extractDirectoryFigures(input, team);
                })
                .then((dfigures) => {
                    return generateInternalHTML(dfigures);
                });
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'directory-figures.csv';
