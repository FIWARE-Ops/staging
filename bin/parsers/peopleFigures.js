const csv = require('csvtojson');
const path = require('path');
const Prettier = require('prettier');
const Template = require('../template');
const People = require('./people');
const _ = require('underscore');
const TEMPLATE_PATH = 'bin/templates/people-figures/';
const INTERNAL_PEOPLE_FIGURES_DIR = 'welcome/directories/people-figures';

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of key figures for later use
 */
function extractPeopleFigures(input, team) {
    const pfigures = [];
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

        pfigures.push(figure);
    });

    if (pfigures.length === 0) {
        console.error('ERROR: No people figures uploaded.');
        process.exit(1);
    }
    console.log(pfigures.length, ' people figures generated.');
    return pfigures;
}

function generateInternalHTML(pfigures) {
    Template.write(
        path.join(INTERNAL_PEOPLE_FIGURES_DIR, 'people-figures.html'),
        path.join(TEMPLATE_PATH, 'table.hbs'),
        pfigures
    );
    Prettier.format(path.join(INTERNAL_PEOPLE_FIGURES_DIR, 'people-figures.html'), { parser: 'html' });
    return pfigures;
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
                    return extractPeopleFigures(input, team);
                })
                .then((pfigures) => {
                    return generateInternalHTML(pfigures);
                });
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'people-figures.csv';
