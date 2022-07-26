const fs = require('fs');
const productSummaryFile = 'products.csv';
const productDetailsFile = 'product-details.csv';
const csv = require('csvtojson');

const Downloader = require('./downloader');
const Parser = require('./dataParser');
const CSVParser = require('./csvParser');

const _ = require('underscore');
let productDetails;

function writeFile(filename, data) {
  fs.writeFile(
    filename,
    'var pageData = ' + JSON.stringify(data, null, 2) + ';',
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
        organisationName: product.organisationName,
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
      if (hash !== productHash && hash.startsWith(companyHash)) {
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

csv()
  .fromFile(productDetailsFile)
  .then(input => {
    return CSVParser.extractProductDetails(input);
  })
  .then(allProducts => {
    // Remember all feature images for later processing.
    productDetails = allProducts;

    csv()
      .fromFile(productSummaryFile)
      .then(input => {
        return CSVParser.extractSummaryInfo(input, allProducts.details);
      })
      .then(summaryInfo => {
        summaryInfo.poweredBy.forEach(prod => {
          relatedProducts(prod, summaryInfo.hashes, 'powered');
        });
        summaryInfo.ready.forEach(prod => {
          relatedProducts(prod, summaryInfo.hashes, 'ready');
        });
        summaryInfo.service.forEach(prod => {
          relatedProducts(prod, summaryInfo.hashes, 'service');
        });
        summaryInfo.cities.forEach(prod => {
          relatedProducts(prod, summaryInfo.hashes, 'cities');
        });

        return summaryInfo;
      })
      .then(summaryInfo => {
        writeFile('powered-by-fiware/pageData.js', summaryInfo.poweredBy);
        writeFile('ngsi-ready/pageData.js', summaryInfo.ready);
        writeFile('services/pageData.js', summaryInfo.service);
        writeFile('cities4cities/pageData.js', summaryInfo.cities);
        writeFile('products/pageData.js', productDetails.details);
      });
  })
  /*
  .then(() => {
    let promises = [];
    images.forEach(image => {
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
    return;
  })
*/
  .catch(e => {
    console.log(e);
    return;
  });
