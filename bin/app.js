const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const PRODUCTS_SUMMARY_FILE = 'products.csv';
const PRODUCT_DETAILS_FILE = 'product-details.csv';
const WEBINARS_FILE = 'webinars.csv';
const csv = require('csvtojson');

const Downloader = require('./downloader');
const Parser = require('./dataParser');
const CSVParser = require('./csvParser');

const CATEGORIES = ['powered', 'ready', 'services', 'cities'];
const PROCESS = process.env.PROCESS || 'products';

const _ = require('underscore');
let productDetails;

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
    result = data.toLowerCase().replace(regex, '-');
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

function findProduct(hash, category) {
  const product = productDetails.details[category][hash];

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
      const caseInsensitive = function(i) {
        return i.toLowerCase();
      };
      const types = _.sortBy(
        _.uniq(
          _.map(webinars, function(webinar) {
            return webinar.type;
          })
        ),
        caseInsensitive
      );
      const domains = _.sortBy(
        _.uniq(
          _.flatten(
            _.map(webinars, function(webinar) {
              return webinar.domain;
            })
          )
        ),
        caseInsensitive
      );
      const technologies = _.sortBy(
        _.uniq(
          _.flatten(
            _.map(webinars, function(webinar) {
              return webinar.technology;
            })
          )
        ),
        caseInsensitive
      );
      writeFilters(
        'community/webinar-recordings/pageData.js',
        types,
        domains,
        technologies
      );
      writeTemplate(
        'community/webinar-recordings/webinars.html',
        'webinar.html',
        webinars
      );
    })
    .catch(e => {
      console.log(e);
      return;
    });
}
