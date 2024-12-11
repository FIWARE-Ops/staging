const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../../dataParser');
const Sorter = require('../../sort');
const Template = require('../../template');
const Downloader = require('../../downloader');
const TEMPLATE_PATH = 'bin/directories/research-development/';
const RESEARCH_DEVELOPMENT_DIR = 'directories/research-development';
const ASSETS_DIR = 'directories/research-development/images';
const FLAGS_DIR = 'directories/people/images/flag';
const IMAGE_SIZE = { height: 201, width: 360 };
const FLAG_SIZE = { height: 120, width: 120 };
const DEFAULT_IMAGE = 'r-and-d-default.png';
const _ = require('underscore');

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of each project for later use
 */
function extractProjects(input) {
    const today = new Date();
    const projects = [];
    input.forEach((item) => {
        const project = {
            name: item.Name,
            image: item.Image ? item.Image : DEFAULT_IMAGE,
            domains: Parser.splitStrings(item.Domain),
            technologies: Parser.splitStrings(item.Technology),
            type: item.Type,
            contact: item.Contact,
            datasheet: item.Datasheet,
            linkedIn: item.LinkedIn,
            twitter: item.Twitter,
            website: item.Website,
            partners: item.Partners,
            partnersLocation: item['Partner Location'],
            tenderLink: item['Tender Link'],
            partnersDetails: Parser.markdown(item['Partner Details']),
            grantAgreement: item['Grant Agreement'],
            gaLink: item['GA Link'],
            flag: item.Flag,
            startDate: Parser.date(item['Start Date']),
            endDate: Parser.date(item['End Date']),
            responsible: item.Responsible,
            projectDir: item['Project Directory'],
            designDir: item['Design Directory'],
            country: item['Funded By'],
            disclaimant: item.Disclaimant,
            excerpt: item.Excerpt,
            description: Parser.markdown(item.Description),
            program1: Parser.notBlank(item['Program 1']),
            program1Link: Parser.notBlank(item['Program 1 Link']),
            program2: Parser.notBlank(item['Program 2']),
            program2Link: Parser.notBlank(item['Program 2 Link']),
            topic: Parser.notBlank(item.Topic),
            topicLink: Parser.notBlank(item['Topic Link']),
            article1: Parser.notBlank(item['Article 1']),
            article1Link: Parser.notBlank(item['Article 1 Link']),
            article2: Parser.notBlank(item['Article 2']),
            article2Link: Parser.notBlank(item['Article 2 Link']),
            publish: Parser.boolean(item.Published)
        };

        project.year = project.startDate ? project.startDate.getFullYear().toString() : 'unknown';
        project.type = project.endDate < today ? 'Completed' : 'Ongoing';

        const filename = Template.createClass(project.name);
        project.social = `/project/${filename}.html`;

        if (project.website || project.twitter || project.linkedIn) {
            project.contacts = true;
        }

        if (project.publish) {
            project.img = 'https://www.fiware.org/wp-content/' + path.join(ASSETS_DIR, project.image);
            project.flagUrl = 'https://www.fiware.org/wp-content/' + path.join(FLAGS_DIR, project.flag);
            projects.push(project);
        }
    });

    if (projects.length === 0) {
        console.error('ERROR: No projects uploaded.');
        process.exit(1);
    }
    console.log(projects.length, ' projects generated.');

    return projects.sort((a, b) => {
        return String(a.name.toLowerCase()).localeCompare(b.name.toLowerCase());
    });
}

function uploadImages(projects) {
    return Downloader.checkImages(projects)
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

function uploadFlags(projects) {
    return Downloader.checkImages(projects, 'flagUrl', 'flag')
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

function generateHTML(projects) {
    const filterData = {
        years: Sorter.sortData(projects, 'year'),
        types: Sorter.sortData(projects, 'type'),
        domains: Sorter.flatSortData(projects, 'domains'),
        countries: Sorter.flatSortData(projects, 'country'),
        projects: _.map(projects, (project)=>{
            delete project.datasheet;
            delete item.projectDirectory
            delete item.designDirectory
            delete item.gaLink
            return project;
        })
    };

    Template.clean(path.join(RESEARCH_DEVELOPMENT_DIR, '/project'));

    Template.write(
        path.join(RESEARCH_DEVELOPMENT_DIR, 'research.html'),
        path.join(TEMPLATE_PATH, 'card.hbs'),
        projects
    );
    Template.write(
        path.join(RESEARCH_DEVELOPMENT_DIR, 'pageData.js'),
        path.join(TEMPLATE_PATH, 'modal.hbs'),
        filterData
    );
    Template.write(
        path.join(RESEARCH_DEVELOPMENT_DIR, 'filters.html'),
        path.join(TEMPLATE_PATH, 'filter.hbs'),
        filterData
    );
    Template.write(
        path.join(RESEARCH_DEVELOPMENT_DIR, 'project/pageData.js'),
        path.join(TEMPLATE_PATH, 'details.hbs'),
        projects
    );

    Template.write(
        path.join(RESEARCH_DEVELOPMENT_DIR, 'project/sitemap.html'),
        path.join(TEMPLATE_PATH, 'sitemap-html.hbs'),
        projects
    );
    Template.write(
        path.join(RESEARCH_DEVELOPMENT_DIR, 'project/sitemap.xml'),
        path.join(TEMPLATE_PATH, 'sitemap-xml.hbs'),
        projects
    );

    projects.forEach((project) => {
        const filename = Template.createClass(project.name);
        Template.write(
            path.join(RESEARCH_DEVELOPMENT_DIR, `project/${filename}.html`),
            path.join(TEMPLATE_PATH, 'social-media.hbs'),
            project
        );
        Prettier.format(path.join(RESEARCH_DEVELOPMENT_DIR, `project/${filename}.html`), { parser: 'html' });
    });

    Prettier.format(path.join(RESEARCH_DEVELOPMENT_DIR, 'research.html'), { parser: 'html' });
    Prettier.format(path.join(RESEARCH_DEVELOPMENT_DIR, 'pageData.js'), { parser: 'flow' });
    Prettier.format(path.join(RESEARCH_DEVELOPMENT_DIR, 'project/pageData.js'), { parser: 'flow' });
    Prettier.format(path.join(RESEARCH_DEVELOPMENT_DIR, 'project/sitemap.html'), { parser: 'html' });
    return projects;
}

/**
 * Read in the research-development file and output
 * HTML and JavaScript files
 */
function parse(file) {
    return csv()
        .fromFile(file)
        .then((input) => {
            return extractProjects(input);
        })
        .then((projects) => {
            return generateHTML(projects);
        })
        .then((projects) => {
            Downloader.emptyAssets();
            return uploadImages(projects).then(() => {
                return projects;
            });
        })
        .then((projects) => {
            return uploadFlags(projects).then(() => {
                return projects;
            });
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'research-development.csv';
