const csv = require('csvtojson');

const path = require('path');
const Prettier = require('prettier');
const Parser = require('../dataParser');
const Sorter = require('../sort');
const Template = require('../template');
const Downloader = require('../downloader');
const _ = require('underscore');

const Static = require('./peopleData');

const TEMPLATE_PATH = 'bin/templates/people';
const PEOPLE_DIR = 'directories/people';
const SPEAKERS_DIR = 'directories/fiware-summit/speakers';
const INTERNAL_PEOPLE_DIR = 'welcome/directories/people';
const ASSETS_DIR = 'directories/people/images/200px';
const FLAGS_DIR = 'directories/people/images/flag';

const IMAGE_SIZE = { height: 200, width: 200 };
const FLAG_SIZE = { height: 120, width: 120 };
const DEFAULT_IMAGE = '../ico_user.png';

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of people for later use
 */
function extractPeople(input, all = false) {
    const people = [];
    input.forEach((item) => {
        const person = {
            title: Parser.trim(item.Title)
                .replaceAll(/[\n\r]+/g, ' ')
                .trim(),
            name: item['Full Name'].replaceAll(/[\n\r]+/g, ' ').trim(),
            surname: item['Surname Filters'],
            image: item['Profile Picture'] ? item['Profile Picture'].trim() : DEFAULT_IMAGE,
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
            team: item.Team,
            country: item.Country,
            flag: item['Country flag'],
            filters: Parser.splitStrings(item['Keyword Job Title Filters']),
            email: item.Email ? item.Email.trim() : '',
            publish: Parser.boolean(item.Published)
        };

        if (person.publish || all) {
            if (person.title !== '') {
                person.title = `${person.title} `;
            }

            if (person.companyType !== '') {
                person.companyType = ` ${person.companyType.trim()}`;
            }
            person.company = person.company.replaceAll(/[\n\r]+/g, ' ').trim();
            person.img = 'https://www.fiware.org/wp-content/' + path.join(ASSETS_DIR, person.image || '');
            person.flagUrl = 'https://www.fiware.org/wp-content/' + path.join(FLAGS_DIR, person.flag || '');
            people.push(person);
        }
    });

    if (people.length === 0) {
        console.error('ERROR: No people uploaded.');
        process.exit(1);
    }
    if (!all) {
        console.log(people.length, ' people generated.');
    }
    return people.sort((a, b) => {
        return a.surname.localeCompare(b.surname);
    });
}

function uploadImages(people) {
    return Downloader.checkImages(people)
        .then((missingImages) => {
            Downloader.logMissing(missingImages);
            return Downloader.validateUploads(missingImages);
        })
        .then((uploads) => {
            Downloader.uploadImages(uploads, path.join('assets', ASSETS_DIR), IMAGE_SIZE);
            Downloader.logUploads(uploads);
            return uploads;
        });
}

function uploadFlags(impactStories) {
    return Downloader.checkImages(impactStories, 'flagUrl', 'flag')
        .then((missingImages) => {
            Downloader.logMissing(missingImages);
            return Downloader.validateUploads(missingImages);
        })
        .then((uploads) => {
            Downloader.uploadImages(uploads, path.join('assets', FLAGS_DIR), FLAG_SIZE);
            Downloader.logUploads(uploads);
            return uploads;
        });
}

function generateHTML(people, page) {
    const templateData = Static.getPeopleData(page);
    const filterData = {
        companies: Sorter.sortData(people, 'company'),
        departments: Sorter.sortData(people, 'department'),
        teams: Sorter.sortData(people, 'team'),
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

    let output = path.join(PEOPLE_DIR, page);
    if (page === 'speakers') {
        output = SPEAKERS_DIR;
    }

    if (page === 'speakers') {
        Template.write(path.join(output, 'people.html'), path.join(TEMPLATE_PATH, 'speaker-card.hbs'), people);
    } else {
        Template.write(path.join(output, 'people.html'), path.join(TEMPLATE_PATH, 'card.hbs'), people);
    }
    if (page === 'team') {
        Template.write(
            path.join(INTERNAL_PEOPLE_DIR, page, 'tech.html'),
            path.join(TEMPLATE_PATH, 'tech-table.hbs'),
            people
        );
        Template.write(
            path.join(INTERNAL_PEOPLE_DIR, page, 'ops.html'),
            path.join(TEMPLATE_PATH, 'ops-table.hbs'),
            people
        );
    }
    Template.write(path.join(output, 'pageData.js'), path.join(TEMPLATE_PATH, 'modal.hbs'), filterData);
    Template.write(path.join(output, 'filters.html'), path.join(TEMPLATE_PATH, 'filter.hbs'), filterData);

    Prettier.format(path.join(output, 'people.html'), { parser: 'html' });
    Prettier.format(path.join(output, 'pageData.js'), { parser: 'flow' });
    Prettier.format(path.join(output, 'filters.html'), { parser: 'html' });
    return people;
}

/**
 * Read in the people file and output
 * HTML and JavaScript files
 */
function parse(file, page) {
    return csv()
        .fromFile(file)
        .then((input) => {
            return extractPeople(input);
        })
        .then((people) => {
            return generateHTML(people, page);
        })
        .then((people) => {
            Downloader.emptyAssets();
            return uploadImages(people).then(() => {
                return people;
            });
        })
        .then((people) => {
            return uploadFlags(people).then(() => {
                return people;
            });
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.extract = extractPeople;
exports.file = 'people.csv';
exports.DEFAULT_IMAGE = DEFAULT_IMAGE;
