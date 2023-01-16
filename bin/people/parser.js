const csv = require('csvtojson');

const path = require('path');
const Parser = require('../dataParser');
const Sorter = require('../sort');
const Template = require('../template');
const _ = require('underscore');

const Static = require('./staticData');

const TEMPLATE_PATH = 'bin/people/';

function extractPeople(input) {
    const people = [];
    input.forEach((item) => {
        const person = {
            name: item['Full Name'],
            surname: item['Surname Filters'],
            img: item['Profile Picture'],
            company: item['Company'],
            domain: item['Domain'],
            website: item['Company website'],
            job: item['Job title'],
            bio: item['Bio'] ? item['Bio'].replaceAll(/[\n\r]+/g, ' ') : '',
            linkedIn: item['LinkedIn'],
            twitter: item['Twitter'],
            department: item['Department'],
            country: item['Country'],
            flag: item['Country flag'],
            filters: Parser.splitStrings(item['Keyword Job Title Filters']),
            publish: Parser.boolean(item['Published'])
        };

        if (person.publish) {
            people.push(person);
        }
    });

    return people.sort((a, b) => {
        return a.surname.localeCompare(b.surname);
    });
}

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

            Template.write(path.join('people', page, 'people.html'), path.join(TEMPLATE_PATH, 'card.hbs'), people);
            Template.write(path.join('people', page, 'pageData.js'), path.join(TEMPLATE_PATH, 'modal.hbs'), filterData);
            Template.write(
                path.join('people', page, 'filters.html'),
                path.join(TEMPLATE_PATH, 'filter.hbs'),
                filterData
            );
        })
        .catch((e) => {
            console.log(e);
            return;
        });
}

exports.parse = parse;
