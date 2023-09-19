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

    let recent = new Date();
    recent.setMonth(recent.getMonth() - 6);

    const jobs = [];
    input.forEach((item) => {
        const job = {
            name: item['Job Title'],
            img: item['Image'] ? item['Image'] : DEFAULT_IMAGE,
            type: item['Seniority Level'],
            mission: item['Mission'],
            description: Parser.markdown(item['Description']),
            domain: Parser.splitStrings(item['Department']),
            postingDate: Parser.date(item['Posting Date']),
            formId: item['Submission Form id'],
            publish: Parser.boolean(item['Published'])
        };

        job.status = job.postingDate < today ? 'Closed' : 'Open';
        job.recent = (job.postingDate > recent);

        const filename= Template.createClass(job.name);
        job.social = `/wp-content/directories/careers/job/${filename}.html`
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
         return (a.postingDate > b.postingDate.getTime());
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

            jobs.forEach ((job, index) =>{

                const filename= Template.createClass(job.name);
                job.index = index;
                Template.write(
                    path.join(RESEARCH_DEVELOPMENT_DIR, `job/${filename}.html`),
                    path.join(TEMPLATE_PATH, 'social-media.hbs'),
                job);
                Prettier.format(path.join(RESEARCH_DEVELOPMENT_DIR, `job/${filename}.html`), { parser: 'html' });

            });
            console.log()

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
