const Domains = require('./domains/parser');
const Enablers = require('./enablers/parser');
const ImpactStories = require('./impact-stories/parser');
const iHubs = require('./ihubs/parser');
const Marketing = require('./marketing-tools/parser');
const Marketplace = require('./marketplace/parser');
const OpenCalls = require('./open-calls/parser');
const Organisations = require('./organisations/parser');
const People = require('./people/parser');
const ResearchDevelopment = require('./research-development/parser');
const Webinars = require('./webinars/parser');

const fs = require('fs-extra');
const Loader = require('./downloader');

const PROCESS = process.env.PROCESS || 'products';
const PAGE = process.env.PAGE || 'fiware';

const PRODUCTS_SUMMARY_FILE = 'products.csv';
const PRODUCT_DETAILS_FILE = 'product-details.csv';

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
    Loader.load('webinars', Webinars.file).then(() => {
        return Webinars.parse(Webinars.file);
    });
}

// Create HTML and template files for the iHubs
if (PROCESS.startsWith('iHubs')) {
    Loader.load('ihubs', iHubs.file).then(() => {
        return iHubs.parse(iHubs.file);
    });
}

// Create HTML and template files for the organisations
if (PROCESS.startsWith('organisations')) {
    Loader.load('organisations', Organisations.file).then(() => {
        return Organisations.parse(Organisations.file);
    });
}

// Create HTML and template files for the generic enablers
if (PROCESS.startsWith('enablers')) {
    Loader.load('enablers', Enablers.file).then(() => {
        return Enablers.parse(Enablers.file);
    });
}

// Create HTML and template files for the impact stories
if (PROCESS.startsWith('impact-stories')) {
    Loader.load('impact-stories', ImpactStories.file).then(() => {
        return ImpactStories.parse(ImpactStories.file);
    });
}

// Create HTML and template files for research and development
if (PROCESS.startsWith('research-development')) {
    Loader.load('research-development', ResearchDevelopment.file).then(() => {
        return ResearchDevelopment.parse(ResearchDevelopment.file);
    });
}

// Create HTML and template files for the generic enablers
if (PROCESS.startsWith('marketing')) {
    Loader.load('marketing', Marketing.file).then(() => {
        return Marketing.parse(Marketing.file);
    });
}

// Create HTML and template files for the generic enablers
if (PROCESS.startsWith('domains')) {
    Loader.load('domains', Domains.file).then(() => {
        return Domains.parse(Domains.file);
    });
}

// Create HTML and template files for the generic enablers
if (PROCESS.startsWith('open-calls')) {
    Loader.load('open-calls', OpenCalls.file).then(() => {
        return OpenCalls.parse(OpenCalls.file);
    });
}

// Create HTML and template files for a listing of people
if (PROCESS.startsWith('people')) {
    Loader.load(PAGE, People.file).then(() => {
        return People.parse(People.file, PAGE);
    });
}

// Ensure that CSV files are present
if (PROCESS === 'postinstall') {
    touch(PRODUCT_DETAILS_FILE);
    touch(PRODUCTS_SUMMARY_FILE);
    touch(Domains.file);
    touch(Enablers.file);
    touch(ImpactStories.file);
    touch(iHubs.file);
    touch(Marketing.file);
    touch(Organisations.file);
    touch(People.file);
    touch(ResearchDevelopment.file);
    touch(Webinars.file);
}
