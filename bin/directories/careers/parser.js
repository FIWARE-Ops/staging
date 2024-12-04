const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../../dataParser');
const Sorter = require('../../sort');
const Template = require('../../template');
const TEMPLATE_PATH = 'bin/directories/careers/';
const CAREERS_DIR = 'directories/careers';

const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/careers/images/careers-default.png';

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of each project for later use
 */
function extractJobs(input) {
    const today = new Date();

    const recent = new Date();
    recent.setMonth(recent.getMonth() - 6);

    const jobs = [];
    input.forEach((item) => {
        const job = {
            name: item['Job Title'],
            img: item.Image ? item.Image : DEFAULT_IMAGE,
            type: item['Seniority Level'],
            mission: item.Mission,
            description: Parser.markdown(item.Description),
            domain: Parser.splitStrings(item.Department),
            postingDate: Parser.date(item['Posting Date']),
            formId: item['Submission Form id'],
            publish: Parser.boolean(item.Published),
            socialMedia: item['Banner SoMe'] ? item['Banner SoMe'] : item.Image || DEFAULT_IMAGE
        };

        job.status = job.postingDate < today ? 'Closed' : 'Open';
        job.recent = job.postingDate > recent;

        const filename = Template.createClass(job.name);
        job.social = `/job/${filename}.html`;
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
        return a.postingDate > b.postingDate.getTime();
    });
}

/**
 * Read in the careers file and output
 * HTML and JavaScript files
 */
function parse(file) {
    return csv()
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

            Template.clean(path.join(CAREERS_DIR, '/job'));

            Template.write(path.join(CAREERS_DIR, 'jobs.html'), path.join(TEMPLATE_PATH, 'card.hbs'), jobs);
            Template.write(path.join(CAREERS_DIR, 'pageData.js'), path.join(TEMPLATE_PATH, 'modal.hbs'), filterData);
            Template.write(path.join(CAREERS_DIR, 'filters.html'), path.join(TEMPLATE_PATH, 'filter.hbs'), filterData);
            Template.write(path.join(CAREERS_DIR, 'job/pageData.js'), path.join(TEMPLATE_PATH, 'details.hbs'), jobs);

            Template.write(
                path.join(CAREERS_DIR, 'job/sitemap.html'),
                path.join(TEMPLATE_PATH, 'sitemap-html.hbs'),
                jobs
            );
            Template.write(
                path.join(CAREERS_DIR, 'job/sitemap.xml'),
                path.join(TEMPLATE_PATH, 'sitemap-xml.hbs'),
                jobs
            );

            jobs.forEach((job) => {
                const filename = Template.createClass(job.name);
                Template.write(
                    path.join(CAREERS_DIR, `job/${filename}.html`),
                    path.join(TEMPLATE_PATH, 'social-media.hbs'),
                    job
                );
                Prettier.format(path.join(CAREERS_DIR, `job/${filename}.html`), { parser: 'html' });
            });

            Prettier.format(path.join(CAREERS_DIR, 'jobs.html'), { parser: 'html' });
            Prettier.format(path.join(CAREERS_DIR, 'pageData.js'), { parser: 'flow' });
            Prettier.format(path.join(CAREERS_DIR, 'job/pageData.js'), { parser: 'flow' });
            Prettier.format(path.join(CAREERS_DIR, 'job/sitemap.html'), { parser: 'html' });
            return jobs;
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'careers.csv';
