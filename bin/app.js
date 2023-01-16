const People = require('./people/parser');
const Marketplace = require('./marketplace/parser');
const Webinars = require('./webinars/parser');

const PROCESS = process.env.PROCESS || 'products';
const PAGE = process.env.PAGE || 'fiware';

const PEOPLE_FILE = 'people.csv';

if (PROCESS.startsWith('products')) {
  Marketplace.parse();
}

if (PROCESS.startsWith('webinars')) {
  Webinars.parse();
}

if (PROCESS.startsWith('people')) {
  People.parse(PEOPLE_FILE, PAGE);
}
