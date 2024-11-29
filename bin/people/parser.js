const csv = require('csvtojson');

const path = require('path');
const Prettier = require('prettier');
const Parser = require('../dataParser');
const Sorter = require('../sort');
const Template = require('../template');
const _ = require('underscore');

const Static = require('./staticData');

const TEMPLATE_PATH = 'bin/people/';
const PEOPLE_DIR = 'directories/people';
const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/people/images/ico_user.png';

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of people for later use
 */
function extractPeople(input, all = false) {
    const people = [];
    input.forEach((item) => {
        const person = {
            title: Parser.trim(item.Title).trim(),
            name: item['Full Name'].trim(),
            surname: item['Surname Filters'],
            img: item['Profile Picture'] ? item['Profile Picture'].trim() : DEFAULT_IMAGE,
            company: item.Company || item.Organization || item.Organisation,
            companyType: item['Legal Form'] || '',
            domain: item.Domain,
            website: Parser.trim(
                item['Company website'] || item['Organization website'] || item['Organisation website']
            ),
            job: item['Job title'],
            bio: item.Bio ? item.Bio.replaceAll(/[\n\r]+/g, ' ').trim() : '',
            linkedIn: Parser.trim(item.LinkedIn),
            twitter: Parser.trim(item.Twitter),
            department: item.Department,
            country: item.Country,
            flag: item['Country flag'],
            filters: Parser.splitStrings(item['Keyword Job Title Filters']),
            email: item['Email'].trim(),         
            publish: Parser.boolean(item.Published)
        };

        if (person.publish || all) {
            if (person.title !== '') {
                person.title = `${person.title} `;
            }

            if (person.companyType !== '') {
                person.companyType = ` ${person.companyType.trim()}`;
            }
            people.push(person);
        }
    });

    if (people.length === 0) {
        console.error('ERROR: No people uploaded.');
        process.exit(1);
    }
    if (!all){
        console.log(people.length, ' people generated.');
    }
    return people.sort((a, b) => {
        return a.surname.localeCompare(b.surname);
    });
}

/**
 * Read in the people file and output
 * HTML and JavaScript files
 */
function parse(file, page) {
    csv()
        .fromFile(file)
        .then((input) => {
            return extractPeople(input);
        })
        .then((people) => {
            const templateData = Static.getPeopleData(page);
            const filterData = {
                companies: Sorter.sortData(people, 'company'),
                departments: Sorter.sortData(people, 'department'),
                domains: Sorter.sortData(people, 'domain'),
                filters: [],
                countries: Sorter.sortData(people, 'country'),
                people,
                labels: templateData
            };

            const filters = [];
            people.forEach((person) => {
                person.filters.forEach((filter) => {
                    filters.push(filter);
                });
            });

            filterData.filters = _.sortBy(_.uniq(filters), Sorter.caseInsensitive);

            if(page === 'speakers'){
                Template.write(path.join(PEOPLE_DIR, page, 'people.html'), path.join(TEMPLATE_PATH, 'speaker-card.hbs'), people);
            } else {
                Template.write(path.join(PEOPLE_DIR, page, 'people.html'), path.join(TEMPLATE_PATH, 'card.hbs'), people);
                Template.write(path.join('welcome', PEOPLE_DIR, page, 'people.html'), path.join(TEMPLATE_PATH, 'table.hbs'), people);
             }
            if(page === 'team'){
               Template.write(path.join('welcome', PEOPLE_DIR, page, 'tech.html'), path.join(TEMPLATE_PATH, 'tech-table.hbs'), people);
               Template.write(path.join('welcome', PEOPLE_DIR, page, 'comms.html'), path.join(TEMPLATE_PATH, 'comms-table.hbs'), people);
               Template.write(path.join('welcome', PEOPLE_DIR, page, 'other.html'), path.join(TEMPLATE_PATH, 'other-table.hbs'), people);
            }
            Template.write(
                path.join(PEOPLE_DIR, page, 'pageData.js'),
                path.join(TEMPLATE_PATH, 'modal.hbs'),
                filterData
            );
            Template.write(
                path.join(PEOPLE_DIR, page, 'filters.html'),
                path.join(TEMPLATE_PATH, 'filter.hbs'),
                filterData
            );

            Prettier.format(path.join(PEOPLE_DIR, page, 'people.html'), { parser: 'html' });
            Prettier.format(path.join(PEOPLE_DIR, page, 'pageData.js'), { parser: 'flow' });
            Prettier.format(path.join(PEOPLE_DIR, page, 'filters.html'), { parser: 'html' });
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.extract = extractPeople;
exports.file = 'people.csv';
exports.DEFAULT_IMAGE;
