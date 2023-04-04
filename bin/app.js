const People = require('./people/parser');
const Marketplace = require('./marketplace/parser');
const Webinars = require('./webinars/parser');
const iHubs = require('./iHubs/parser');
const fs = require('fs-extra');
const Loader = require('./load');

const PROCESS = process.env.PROCESS || 'products';
const PAGE = process.env.PAGE || 'fiware';

const PEOPLE_FILE = 'people.csv';
const WEBINARS_FILE = 'webinars.csv';
const IHUBS_FILE = 'iHubs.csv';
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
