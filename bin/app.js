const People = require('./people/parser');
const Marketplace = require('./marketplace/parser');
const Webinars = require('./webinars/parser');

const PROCESS = process.env.PROCESS || 'products';
const PAGE = process.env.PAGE || 'fiware';

const PEOPLE_FILE = 'people.csv';
const WEBINARS_FILE = 'webinars.csv';
const PRODUCTS_SUMMARY_FILE = 'products.csv';
const PRODUCT_DETAILS_FILE = 'product-details.csv';

if (PROCESS.startsWith('products')) {
  Marketplace.parse(PRODUCT_DETAILS_FILE, PRODUCTS_SUMMARY_FILE);
}

if (PROCESS.startsWith('webinars')) {
  Webinars.parse(WEBINARS_FILE);
}

if (PROCESS.startsWith('people')) {
  People.parse(PEOPLE_FILE, PAGE);
}
