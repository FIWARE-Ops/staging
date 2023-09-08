const People = require('./people/parser');
const Marketplace = require('./marketplace/parser');
const Webinars = require('./webinars/parser');
const iHubs = require('./ihubs/parser');
const Organisations = require('./organisations/parser');
const Enablers = require('./enablers/parser');
const ImpactStories = require('./impact-stories/parser');
const ResearchDevelopment = require('./research-development/parser');
const Marketing = require('./marketing-tools/parser');
const fs = require('fs-extra');
const Loader = require('./downloader');

const PROCESS = process.env.PROCESS || 'products';
const PAGE = process.env.PAGE || 'fiware';

const PEOPLE_FILE = 'people.csv';
const WEBINARS_FILE = 'webinars.csv';
const IHUBS_FILE = 'iHubs.csv';
const PRODUCTS_SUMMARY_FILE = 'products.csv';
const PRODUCT_DETAILS_FILE = 'product-details.csv';
const ORGANISATIONS_FILE = 'organisations.csv';
const ENABLERS_FILE = 'enablers.csv';
const IMPACT_STORIES_FILE = 'impact-stories.csv';
const RESEARCH_DEVELOPMENT_FILE = 'research-development.csv';
const MARKETING_FILE = 'marketing.csv';

/**
 *  Ensure that a file exists
 */
async function touch(file) {
    await fs.ensureFile(file);
    const now = new Date();
    await fs.utimes(file, now, now);
}

// Create HTML and template files for the FIWARE Marketplace
if (PROCESS.startsWith('products')) {
    Loader.load('products', PRODUCT_DETAILS_FILE)
        .then(() => {
            return Loader.load('products', PRODUCTS_SUMMARY_FILE);
        })
        .then(() => {
            return Marketplace.parse(PRODUCT_DETAILS_FILE, PRODUCTS_SUMMARY_FILE, PROCESS);
        });
}

// Create HTML and template files for the webinars
if (PROCESS.startsWith('webinars')) {
    Loader.load('webinars', WEBINARS_FILE).then(() => {
        return Webinars.parse(WEBINARS_FILE);
    });
}

// Create HTML and template files for the webinars
if (PROCESS.startsWith('iHubs')) {
    Loader.load('ihubs', IHUBS_FILE).then(() => {
        return iHubs.parse(IHUBS_FILE);
    });
}

// Create HTML and template files for the webinars
if (PROCESS.startsWith('organisations')) {
    Loader.load('organisations', ORGANISATIONS_FILE).then(() => {
        return Organisations.parse(ORGANISATIONS_FILE);
    });
}

// Create HTML and template files for the generic enablers
if (PROCESS.startsWith('enablers')) {
    Loader.load('enablers', ENABLERS_FILE).then(() => {
        return Enablers.parse(ENABLERS_FILE);
    });
}

// Create HTML and template files for the impact stories
if (PROCESS.startsWith('impact-stories')) {
    Loader.load('impact-stories', IMPACT_STORIES_FILE).then(() => {
        return ImpactStories.parse(IMPACT_STORIES_FILE);
    });
}

// Create HTML and template files for research and development
if (PROCESS.startsWith('research-development')) {
    Loader.load('research-development', RESEARCH_DEVELOPMENT_FILE).then(() => {
        return ResearchDevelopment.parse(RESEARCH_DEVELOPMENT_FILE);
    });
}

// Create HTML and template files for the generic enablers
if (PROCESS.startsWith('marketing')) {
    Loader.load('marketing', MARKETING_FILE).then(() => {
        return Marketing.parse(MARKETING_FILE);
    });
}

// Create HTML and template files for a listing of people
if (PROCESS.startsWith('people')) {
    Loader.load(PAGE, PEOPLE_FILE).then(() => {
        return People.parse(PEOPLE_FILE, PAGE);
    });
}

// Ensure that CSV files are present
if (PROCESS === 'postinstall') {
    touch(PRODUCT_DETAILS_FILE);
    touch(PRODUCTS_SUMMARY_FILE);
    touch(WEBINARS_FILE);
    touch(PEOPLE_FILE);
    touch(IHUBS_FILE);
}
