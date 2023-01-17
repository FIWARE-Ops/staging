const csv = require('csvtojson');
const path = require('path');

const Parser = require('../dataParser');
const Sorter = require('../sort');
const Template = require('../template');
const TEMPLATE_PATH = 'bin/webinars/';
const WEBINARS_DIR = 'directories/webinars';

function extractWebinars(input) {
    const webinars = [];
    input.forEach((item) => {
        const webinar = {
            name: item['Name'],
            img: item['Image'],
            companyLink: item['Video'],
            domain: Parser.splitStrings(item['Audience']),
            type: item['Type'],
            technology: Parser.splitStrings(item['Technology']),
            year: parseInt(item['Year']),
            difficulty: parseInt(item['Difficulty']),
            content: Parser.markdown(item['Content']),
            publish: Parser.boolean(item['Published'])
        };
        if (webinar.publish) {
            webinars.push(webinar);
        }
    });
    return webinars;
}

function parse(file) {
    csv()
        .fromFile(file)
        .then((input) => {
            return extractWebinars(input);
        })
        .then((webinars) => {
            const filterData = {
                types: Sorter.sortData(webinars, 'type'),
                technologies: Sorter.flatSortData(webinars, 'technology'),
                domains: Sorter.flatSortData(webinars, 'domain')
            };

            Template.write(path.join(WEBINARS_DIR, 'webinars.html'), path.join(TEMPLATE_PATH, 'card.hbs'), webinars);
            Template.write(path.join(WEBINARS_DIR, 'pageData.js'), path.join(TEMPLATE_PATH, 'modal.hbs'), filterData);
            Template.write(path.join(WEBINARS_DIR, 'filters.html'), path.join(TEMPLATE_PATH, 'filter.hbs'), filterData);
        })
        .catch((e) => {
            console.log(e);
            return;
        });
}

exports.parse = parse;
