const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../../dataParser');
const Sorter = require('../../sort');
const Template = require('../../template');
const TEMPLATE_PATH = 'bin/directories/marketing-toolbox/';
const MARKETING_TOOLS_DIR = 'directories/marketing-toolbox';

const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/marketing-toolbox/images/iHub-default.png';

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of tools for later use
 */
function extractTools(input) {
    const tools = [];
    input.forEach((item) => {
        const tool = {
            name: item.Name,
            img: item.Image ? item.Image : DEFAULT_IMAGE,
            domain: Parser.splitStrings(item.Domain),
            type: item.Type,
            website: item.Link,
            language: item.Language,
            flag: item['Country flag'],
            publish: Parser.boolean(item.Published)
        };

        if (tool.website || tool.twitter || tool.linkedIn) {
            tool.contacts = true;
        }

        if (tool.publish) {
            tools.push(tool);
        }
    });

    if (tools.length === 0) {
        console.error('ERROR: No tools uploaded.');
        process.exit(1);
    }
    console.log(tools.length, ' tools generated.');

    return tools.sort((a, b) => {
        return String(a.name).localeCompare(b.name);
    });
}

function generateHTML(tools) {
    const filterData = {
        types: Sorter.sortData(tools, 'type'),
        domains: Sorter.flatSortData(tools, 'domain'),
        languages: Sorter.sortData(tools, 'language'),
        tools
    };

    Template.write(path.join(MARKETING_TOOLS_DIR, 'tools.html'), path.join(TEMPLATE_PATH, 'card.hbs'), tools);
    Template.write(path.join(MARKETING_TOOLS_DIR, 'pageData.js'), path.join(TEMPLATE_PATH, 'modal.hbs'), filterData);
    Template.write(path.join(MARKETING_TOOLS_DIR, 'filters.html'), path.join(TEMPLATE_PATH, 'filter.hbs'), filterData);

    Prettier.format(path.join(MARKETING_TOOLS_DIR, 'tools.html'), { parser: 'html' });
    Prettier.format(path.join(MARKETING_TOOLS_DIR, 'pageData.js'), { parser: 'flow' });
    Prettier.format(path.join(MARKETING_TOOLS_DIR, 'filters.html'), { parser: 'html' });
    return tools;
}

/**
 * Read in the iHubs file and output
 * HTML and JavaScript files
 */
function parse(file) {
    return csv()
        .fromFile(file)
        .then((input) => {
            return extractTools(input);
        })
        .then((tools) => {
            return generateHTML(tools);
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'marketing.csv';
