const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../dataParser');
const Sorter = require('../sort');
const Template = require('../template');
const TEMPLATE_PATH = 'bin/research-development/';
const RESEARCH_DEVELOPMENT_DIR = 'directories/research-development';

const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/research-development/images/iHub-default.png';

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of each project for later use
 */
function extractProjects(input) {
    const projects = [];
    input.forEach((item) => {
        const iHub = {
            name: item['Name'],
            city: item['City'],
            img: item['Image'] ? item['Image'] : DEFAULT_IMAGE,
            domain: Parser.splitStrings(item['Domain']),
            type: item['Type'],
            linkedIn: item['LinkedIn'],
            twitter: item['Twitter'],
            website: item['Website'],
            country: item['Country'],
            flag: item['Country flag'],
            content: Parser.markdown(item['Content']),
            publish: Parser.boolean(item['Published'])
        };

        if (iHub.website || iHub.twitter || iHub.linkedIn) {
            iHub.contacts = true;
        }

        if (iHub.publish) {
            projects.push(iHub);
        }
    });

    if (projects.length === 0) {
        console.error('ERROR: No projects uploaded.');
        process.exit(1);
    }
    console.log(projects.length, ' projects generated.');

    return projects.sort((a, b) => {
        return b.name - a.name;
    });
}

/**
 * Read in the research-development file and output
 * HTML and JavaScript files
 */
function parse(file) {
    csv()
        .fromFile(file)
        .then((input) => {
            return extractProjects(input);
        })
        .then((projects) => {
            const filterData = {
                types: Sorter.sortData(projects, 'type'),
                domains: Sorter.flatSortData(projects, 'domain'),
                countries: Sorter.flatSortData(projects, 'country'),
                projects
            };

            Template.write(path.join(RESEARCH_DEVELOPMENT_DIR, 'research-development.html'), path.join(TEMPLATE_PATH, 'card.hbs'), projects);
            Template.write(path.join(RESEARCH_DEVELOPMENT_DIR, 'pageData.js'), path.join(TEMPLATE_PATH, 'modal.hbs'), filterData);
            Template.write(path.join(RESEARCH_DEVELOPMENT_DIR, 'filters.html'), path.join(TEMPLATE_PATH, 'filter.hbs'), filterData);

            Prettier.format(path.join(RESEARCH_DEVELOPMENT_DIR, 'research-development.html'), { parser: 'html' });
            Prettier.format(path.join(RESEARCH_DEVELOPMENT_DIR, 'pageData.js'), { parser: 'flow' });
            Prettier.format(path.join(RESEARCH_DEVELOPMENT_DIR, 'filters.html'), { parser: 'html' });
        })
        .catch((e) => {
            console.log(e);
            return;
        });
}

exports.parse = parse;
