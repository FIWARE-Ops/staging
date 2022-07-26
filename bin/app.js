const fs = require('fs');
const products = 'products.csv';
const productDetails = 'product-details.csv';
const csv = require('csvtojson');

const Downloader = require('./downloader');
const Parser = require('./parser');
const CSVParser = require('./csvParser');

const _ = require('underscore');
let images = [];

csv()
  .fromFile(productDetails)
  .then(input => {
    return CSVParser.extractProductDetails(input);
  })
  /*  .then(input => {
    const details = {
      powered: {},
      ngsi: {},
      city: {},
      service: {},
      unknown: {}
    };

    input.forEach(item => {
      const category = Parser.getCategory(item['FIWARE-Ready']);
      const hash = Parser.getHash(item['Organisation Name'], item['Product Name']);

      details[category][hash] = {
        category: item['FIWARE-Ready'],
        organisationName: item['Organisation Name'],
        productName: item['Product Name'],
        organisationWebsite: item['Organisation Website'],
        organisationEmail:
          item['Organisation Email'] !== ''
            ? 'mailto:' + item['Organisation Email']
            : '',
        linkedIn: item['LinkedIn'],
        twitter: item['Twitter'],
        productWebsite: item['Product Website'],
        excerpt: item['Excerpt'],
        yearOfValidation: parseInt(item['Year of validation']),
        description: Parser.markdown(item['Description and Benefits']),
        challenge: Parser.markdown(item['Challenge and Context']),
        references: Parser.markdown(item['References / Customers']),
        awards: Parser.markdown(item['Awards']),
        technologies: Parser.splitStrings(item['Technologies']),
        domains: Parser.splitStrings(item['Domains']),

        docs: Parser.getLinkArray(docFields, 'Document', item),
        videos: Parser.getLinkArray(mediaFields, 'Media', item),
        materials: Parser.getLinkArray(refFields, 'Reference', item),

        logo: item['Logo'],
        featuredImage: item['Featured Image'],
        furtherImages: ''
      };

      if (item['Featured Image']) {
        const file =
          'hero_' +
          item['Organisation Name'] +
          '_' +
          item['Product Name'] +
          path.extname(item['Featured Image']);
        images.push([file, item['Featured Image']]);
      }
    });

    return details;
  })*/
  .then(allProducts => {
    // Details

    images = allProducts.images;

    fs.writeFile(
      'products/pageData.js',
      'var pageData = ' + JSON.stringify(allProducts.details, null, 2) + ';',
      function(err) {
        if (err) return console.log(err);
      }
    );
    return allProducts.details;
  })
  .then(details => {
    const poweredBy = [];
    const ready = [];
    const service = [];
    const cities = [];

    const hashes = {
      powered: [],
      ready: [],
      cities: [],
      service: [],
      unknown: []
    };

    csv()
      .fromFile(products)
      .then(input => {
        return CSVParser.extractSummaryInfo(input, details);
      })
      .then(summaryInfo => {
        const regex = /([^a-zA-Z0-9À-ÿ])/gi;
        //console.log(products.hashes)
        /*
        summaryInfo.poweredBy.forEach((prod) =>{
          const hash = Parser.getHash(prod.company,
              prod.name
            );
          console.log(prod.company.replace(regex, '').toLowerCase())
          console.log(hash)
        });
*/
        return summaryInfo;
      })
      .then(summaryInfo => {
        // summaryInfo

        fs.writeFile(
          'powered-by-fiware/pageData.js',
          'var pageData = ' +
            JSON.stringify(summaryInfo.poweredBy, null, 2) +
            ';',
          function(err) {
            if (err) return console.log(err);
          }
        );

        // Devices
        fs.writeFile(
          'ngsi-ready/pageData.js',
          'var pageData = ' + JSON.stringify(summaryInfo.ready, null, 2) + ';',
          function(err) {
            if (err) return console.log(err);
          }
        );

        // Services

        fs.writeFile(
          'services/pageData.js',
          'var pageData = ' +
            JSON.stringify(summaryInfo.service, null, 2) +
            ';',
          function(err) {
            if (err) return console.log(err);
          }
        );

        // Cities

        fs.writeFile(
          'cities4cities/pageData.js',
          'var pageData = ' + JSON.stringify(summaryInfo.cities, null, 2) + ';',
          function(err) {
            if (err) return console.log(err);
          }
        );
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
