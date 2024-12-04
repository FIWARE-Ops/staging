const csv = require('csvtojson');
const path = require('path');
const Prettier = require('prettier');

const Static = require('./staticData');
const Parser = require('../../dataParser');
const Sorter = require('../../sort');
const Template = require('../../template');
const TEMPLATE_PATH = 'bin/directories/enablers/';
const ENABLERS_DIR = 'directories/enablers';

const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/enablers/images/webinar-default.png';

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of enablers for later use
 */
function extractEnablers(input) {
    const enablers = [];
    input.forEach((item) => {
        const enabler = {
            name: item.Name,
            img: item['Owner Image'] ? item['Owner Image'] : DEFAULT_IMAGE,
            company: item.Owner || item.Organization || item.Organisation,
            companyType: item['Legal Form'],
            gitHubOrg: item['GitHub Organisation'] || item['GitHub Organization'],
            type: item.Type,
            badge: Static.getBadge(item.Type, item.Status),
            chapter: Static.getChapter(item.Type),
            status: item.Status,
            documentation: item.Documentation,
            docker: item.Docker,
            quay: item.Quay,
            gitHub: item.GitHub,
            summary: item.Summary,
            technology: Parser.splitStrings(item.Technology),
            domain: Parser.splitStrings(item.Keywords),
            content: Parser.richMarkdown(item.Content),
            publish: Parser.boolean(item.Published),
            member: Parser.boolean(item.Member)
        };
        if (enabler.publish) {
            enablers.push(enabler);
        }
    });

    if (enablers.length === 0) {
        console.error('ERROR: No enablers uploaded.');
        process.exit(1);
    }
    console.log(enablers.length, ' enablers generated.');

    return enablers.sort((a, b) => {
        return b.season - a.season;
    });
}

function generateHTML(enablers) {
    const filterData = {
        types: Sorter.sortData(enablers, 'type'),
        technologies: Sorter.flatSortData(enablers, 'technology'),
        domains: Sorter.flatSortData(enablers, 'domain'),
        enablers
    };
    Template.write(path.join(ENABLERS_DIR, 'enablers.html'), path.join(TEMPLATE_PATH, 'card.hbs'), enablers);
    Template.write(path.join(ENABLERS_DIR, 'pageData.js'), path.join(TEMPLATE_PATH, 'modal.hbs'), filterData);
    Template.write(path.join(ENABLERS_DIR, 'filters.html'), path.join(TEMPLATE_PATH, 'filter.hbs'), filterData);

    Prettier.format(path.join(ENABLERS_DIR, 'enablers.html'), { parser: 'html' });
    Prettier.format(path.join(ENABLERS_DIR, 'pageData.js'), { parser: 'flow' });
    Prettier.format(path.join(ENABLERS_DIR, 'filters.html'), { parser: 'html' });
    return enablers;
}

/**
 * Read in the enablers file and output
 * HTML and JavaScript files
 */
function parse(file) {
    csv()
        .fromFile(file)
        .then((input) => {
            return extractEnablers(input);
        })
        .then((enablers) => {
            return generateHTML(enablers);
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'enablers.csv';
