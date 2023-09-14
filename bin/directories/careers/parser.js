const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../../dataParser');
const Sorter = require('../../sort');
const Template = require('../../template');
const TEMPLATE_PATH = 'bin/directories/careers/';
const RESEARCH_DEVELOPMENT_DIR = 'directories/careers';

const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/careers/images/careers-default.png';

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of each project for later use
 */
function extractJobs(input) {
    const today = new Date();
    const jobs = [];
    input.forEach((item) => {
        const job = {
            name: item['Job Title'],
            img: item['Image'] ? item['Image'] : DEFAULT_IMAGE,
            type: item['Experience'],
            description: Parser.markdown(item['Description']),
            domain: Parser.splitStrings(item['Department']),
            closeDate: Parser.date(item['Close Date']),
            publish: Parser.boolean(item['Published'])
        };

        job.status = job.closeDate < today ? 'Closed' : 'Open';

        if (job.publish) {
            jobs.push(job);
        }
    });

    if (jobs.length === 0) {
        console.error('ERROR: No jobs uploaded.');
        process.exit(1);
    }
    console.log(jobs.length, ' jobs generated.');

    return jobs.sort((a, b) => {
         return (a.closeDate > b.closeDate.getTime());
    });
}

/**
 * Read in the careers file and output
 * HTML and JavaScript files
 */
function parse(file) {
    csv()
        .fromFile(file)
        .then((input) => {
            return extractJobs(input);
        })
        .then((jobs) => {
            const filterData = {
                types: Sorter.sortData(jobs, 'type'),
                domains: Sorter.flatSortData(jobs, 'domain'),
                jobs
            };

            Template.write(
                path.join(RESEARCH_DEVELOPMENT_DIR, 'jobs.html'),
                path.join(TEMPLATE_PATH, 'card.hbs'),
                jobs
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
                path.join(RESEARCH_DEVELOPMENT_DIR, 'job/pageData.js'),
                path.join(TEMPLATE_PATH, 'details.hbs'),
                jobs
            );

            Prettier.format(path.join(RESEARCH_DEVELOPMENT_DIR, 'jobs.html'), { parser: 'html' });
            Prettier.format(path.join(RESEARCH_DEVELOPMENT_DIR, 'pageData.js'), { parser: 'flow' });
            Prettier.format(path.join(RESEARCH_DEVELOPMENT_DIR, 'job/pageData.js'), { parser: 'flow' });
        })
        .catch((e) => {
            console.log(e);
            return;
        });
}

exports.parse = parse;
exports.file = 'careers.csv';
