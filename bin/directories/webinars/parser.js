const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Static = require('./staticData');
const Parser = require('../../dataParser');
const Sorter = require('../../sort');
const Template = require('../../template');
const TEMPLATE_PATH = 'bin/directories/webinars/';
const WEBINARS_DIR = 'directories/webinars';

const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/images/thumb-placeholder.jpg';

function getExcerpt(item) {
    const text = Parser.textOnly(item.Content);
    const next = text.indexOf('.', 40);
    return text.substring(0, next + 1);
}

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of webinars for later use
 */
function extractWebinars(input) {
    const webinars = [];
    input.forEach((item) => {
        const webinar = {
            season: item.Season,
            name: item.Name,
            img: item.Image ? item.Image : DEFAULT_IMAGE,
            companyLink: item.Video,
            domain: Parser.splitStrings(item.Audience),
            type: item.Type,
            excerpt: getExcerpt(item),
            badge: Static.getBadge(item.Type),
            chapter: Static.getChapter(item.Type),
            technology: Parser.splitStrings(item.Technology),
            year: parseInt(item.Year),
            difficulty: parseInt(item.Difficulty),
            content: Parser.markdown(item.Content),
            length: item.Length,
            publish: Parser.boolean(item.Published)
        };
        if (webinar.publish) {
            webinars.push(webinar);
        }
    });

    if (webinars.length === 0) {
        console.error('ERROR: No webinars uploaded.');
        process.exit(1);
    }
    console.log(webinars.length, ' webinars generated.');

    return webinars.sort((a, b) => {
        return b.season - a.season;
    });
}

function generateHTML(webinars) {
    const filterData = {
        types: Sorter.sortData(webinars, 'type'),
        technologies: Sorter.flatSortData(webinars, 'technology'),
        domains: Sorter.flatSortData(webinars, 'domain'),
        webinars
    };

    Template.clean(WEBINARS_DIR);

    Template.write(path.join(WEBINARS_DIR, 'sitemap.html'), path.join(TEMPLATE_PATH, 'sitemap-html.hbs'), webinars);
    Template.write(path.join(WEBINARS_DIR, 'sitemap.xml'), path.join(TEMPLATE_PATH, 'sitemap-xml.hbs'), webinars);

    webinars.forEach((webinar) => {
        const filename = Template.createClass(webinar.name);
        Template.write(
            path.join(WEBINARS_DIR, `${filename}.html`),
            path.join(TEMPLATE_PATH, 'social-media.hbs'),
            webinar
        );
        Prettier.format(path.join(WEBINARS_DIR, `${filename}.html`), { parser: 'html' });
    });

    Template.write(path.join(WEBINARS_DIR, 'webinars.html'), path.join(TEMPLATE_PATH, 'card.hbs'), webinars);
    Template.write(path.join(WEBINARS_DIR, 'pageData.js'), path.join(TEMPLATE_PATH, 'modal.hbs'), filterData);
    Template.write(path.join(WEBINARS_DIR, 'filters.html'), path.join(TEMPLATE_PATH, 'filter.hbs'), filterData);

    Prettier.format(path.join(WEBINARS_DIR, 'webinars.html'), { parser: 'html' });
    Prettier.format(path.join(WEBINARS_DIR, 'pageData.js'), { parser: 'flow' });
    Prettier.format(path.join(WEBINARS_DIR, 'filters.html'), { parser: 'html' });
    Prettier.format(path.join(WEBINARS_DIR, 'sitemap.html'), { parser: 'html' });
    return webinars;
}

/**
 * Read in the webinars file and output
 * HTML and JavaScript files
 */
function parse(file) {
    return csv()
        .fromFile(file)
        .then((input) => {
            return extractWebinars(input);
        })
        .then((webinars) => {
            return generateHTML(webinars);
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'webinars.csv';
