const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const PRODUCTS_SUMMARY_FILE = 'products.csv';
const PRODUCT_DETAILS_FILE = 'product-details.csv';
const WEBINARS_FILE = 'webinars.csv';
const PEOPLE_FILE = 'people.csv';
const csv = require('csvtojson');

const Downloader = require('./downloader');
const Parser = require('./dataParser');
const CSVParser = require('./csvParser');

const CATEGORIES = ['powered', 'ready', 'services', 'cities'];
const PROCESS = process.env.PROCESS || 'products';

const _ = require('underscore');
let productDetails;

const caseInsensitive = function(i) {
  return i ? i.toLowerCase() : '';
};

function sortData(input, attr) {
  return _.sortBy(
    _.uniq(
      _.map(input, function(el) {
        return el[attr] ? el[attr] : '';
      })
    ),
    caseInsensitive
  );
}

function flatSortData(input, attr) {
  return _.sortBy(
    _.uniq(
      _.flatten(
        _.map(input, function(el) {
          return el[attr] ? el[attr] : '';
        })
      )
    ),
    caseInsensitive
  );
}

function createClass(data) {
  let result = '';
  const regex = /([^a-zA-Z0-9À-ÿ])/gi;
  if (typeof data == 'object') {
    data.forEach((element, i) => {
      if (i + 1 === data.length) {
        result += `${element.toLowerCase().replace(regex, '-')}`;
      } else {
        result += `${element.toLowerCase().replace(regex, '-')} `;
      }
    });
  } else {
    result = data ? data.toLowerCase().replace(regex, '-') : '';
  }
  return result;
}

function rating(difficulty) {
  let result = '';
  for (let i = 0; i < difficulty; i++) {
    result += '★ ';
  }
  return result;
}

function writeTemplate(filename, template, input) {
  readTemplate(template, function(err, data) {
    if (!err) {
      const template = Handlebars.compile(data);
      Handlebars.registerHelper('createClass', createClass);
      Handlebars.registerHelper('rating', rating);
      const output = template(input);
      fs.writeFile(filename, output, function(err) {
        if (err) return console.log(err);
      });
    } else {
      console.log(err);
    }
  });
}

function readTemplate(template, callback) {
  const filePath = path.join(__dirname, '..', 'templates', template);
  fs.readFile(filePath, { encoding: 'utf-8' }, callback);
}

function writeFile(filename, data) {
  fs.writeFile(
    filename,
    'var pageData = ' + JSON.stringify(data, null, 2) + ';',
    function(err) {
      if (err) return console.log(err);
    }
  );
}

function writeFilters(filename, types, domains, technologies) {
  fs.writeFile(
    filename,
    `var types = ${JSON.stringify(types, null, 2)};
var domains = ${JSON.stringify(domains, null, 2)};
var technologies = ${JSON.stringify(technologies, null, 2)};`,
    function(err) {
      if (err) return console.log(err);
    }
  );
}

function writePeopleFilters(
  filename,
  companies = [],
  departments = [],
  domains = [],
  titles = [],
  countries = [],
  modalData = ''
) {
  fs.writeFile(
    filename,
    `var companies = ${JSON.stringify(companies, null, 2)};
var departments = ${JSON.stringify(departments, null, 2)};
var domains = ${JSON.stringify(domains, null, 2)};
var titles = ${JSON.stringify(titles, null, 2)};
var countries = ${JSON.stringify(countries, null, 2)};
 ${modalData}
`,
    function(err) {
      if (err) return console.log(err);
    }
  );
}

function findProduct(hash, category) {
  const product = productDetails.details[category][hash];

  if (!product) {
    console.log('DATA MISMATCH: ', category, hash);
  }

  return product
    ? {
        category: product.category,
        featuredImage: product.featuredImage,
        excerpt: product.excerpt,
        productName: product.productName,
        companyLink: './?category=' + category + '&id=' + hash
      }
    : null;
}

function relatedProducts(product, allCategories, category) {
  const regex = /([^a-zA-Z0-9À-ÿ])/gi;
  const productHash = Parser.getHash(product.company, product.name);
  const companyHash = product.company.replace(regex, '').toLowerCase();

  const related = [];

  _.keys(allCategories).forEach(category => {
    allCategories[category].forEach(hash => {
      if (hash !== productHash && hash.startsWith(companyHash + '-')) {
        const product = findProduct(hash, category);
        if (product) {
          related.push(product);
        }
      }
    });
  });
  if (!_.isEmpty(related) && productDetails.details[category][productHash]) {
    productDetails.details[category][productHash].related = related;
  }
}

if (PROCESS.startsWith('products')) {
  csv()
    .fromFile(PRODUCT_DETAILS_FILE)
    .then(input => {
      return CSVParser.extractProductDetails(input);
    })
    .then(allProducts => {
      // Remember all feature images for later processing.
      productDetails = allProducts;

      csv()
        .fromFile(PRODUCTS_SUMMARY_FILE)
        .then(input => {
          return CSVParser.extractSummaryInfo(input, allProducts.details);
        })
        .then(summaryInfo => {
          CATEGORIES.forEach(category => {
            summaryInfo[category].forEach(prod => {
              relatedProducts(prod, summaryInfo.hashes, category);
            });
          });
          return summaryInfo;
        })
        .then(summaryInfo => {
          writeFile(
            'marketplace/powered-by-fiware/pageData.js',
            summaryInfo.powered
          );
          console.log('');
          console.log(summaryInfo.powered.length + ' Products');
          writeFile('marketplace/fiware-ready/pageData.js', summaryInfo.ready);
          console.log(summaryInfo.ready.length + ' Devices');
          writeFile(
            'marketplace/support-services/pageData.js',
            summaryInfo.services
          );
          console.log(summaryInfo.services.length + ' Services');
          writeFile(
            'marketplace/cities4cities/pageData.js',
            summaryInfo.cities
          );
          console.log(summaryInfo.cities.length + ' Cities');
          writeFile(
            'marketplace/product-details/pageData.js',
            productDetails.details
          );

          const featured = CSVParser.extractFeatured(summaryInfo);
          writeTemplate(
            'marketplace/product-details/featured.html',
            'featured.html',
            featured
          );
        });
    })
    .then(() => {
      if (PROCESS === 'products+images') {
        let promises = [];
        productDetails.images.forEach(image => {
          let promise = Downloader.downloadImages(image);
          promises.push(promise);
        });
        Promise.all(promises)
          .then(results => {
            results.forEach(result => {
              console.log(result);
            });
          })
          .catch(e => {
            console.log(e);
          });
      }
      return;
    })
    .catch(e => {
      console.log(e);
      return;
    });
}

if (PROCESS.startsWith('webinars')) {
  csv()
    .fromFile(WEBINARS_FILE)
    .then(input => {
      return CSVParser.extractWebinars(input);
    })
    .then(webinars => {
      const filterData = {
        types: sortData(webinars, 'type'),
        technologies: flatSortData(webinars, 'technology'),
        domains: flatSortData(webinars, 'domain')
      };

      writeTemplate(
        'community/webinar-recordings/webinars.html',
        'webinar.html',
        webinars
      );
      writeTemplate(
        'community/webinar-recordings/pageData.js',
        'webinarModal.html',
        filterData
      );
      writeTemplate(
        'community/webinar-recordings/filters.html',
        'webinarFilter.html',
        filterData
      );
    })
    .catch(e => {
      console.log(e);
      return;
    });
}

if (PROCESS.startsWith('people')) {
  csv()
    .fromFile(PEOPLE_FILE)
    .then(input => {
      return CSVParser.extractPeople(input);
    })
    .then(people => {
      const filterData = {
        companies: sortData(people, 'company'),
        departments: sortData(people, 'department'),
        domains: sortData(people, 'domain'),
        titles: sortData(people, 'job'),
        countries: sortData(people, 'country'),
        people
      };
      writeTemplate('people/people.html', 'people.html', people);
      writeTemplate('people/pageData.js', 'peopleModal.html', filterData);
      writeTemplate('people/filters.html', 'peopleFilter.html', filterData);
    })
    .catch(e => {
      console.log(e);
      return;
    });
}
