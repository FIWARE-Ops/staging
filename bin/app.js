const fs = require('fs');
const products = 'products.csv';
const productDetails = 'product-details.csv';
const csv = require('csvtojson');
const showdown = require('showdown');
const converter = new showdown.Converter();

const poweredBy = [];
const ready = [];
const service = [];
const cities = [];
const details = {
  powered: {},
  ngsi: {},
  city: {},
  service: {},
  unknown: {}
};

const docFields = ['Tech Documentation', 'Doc 2', 'Doc 3', ' Doc 4', 'Doc 5'];
const mediaFields = ['Media', 'Media 2', 'Media 3', 'Media 4', 'Media 5'];

const refFields = [
  'Reference Material',
  'Material 2',
  'Material 3',
  'Material 4',
  'Material 5'
];

function getLinkArray(fields, title, item) {
  const array = [];
  fields.forEach((field, i) => {
    if (item[field] && item[field] !== '') {
      array.push([title + ' ' + (i + 1), item[field]]);
    }
  });
  return array;
}

function markdown(text) {
  return text !== '' ? converter.makeHtml(text.replaceAll(/•/g, '\n*')) : '';
}

function getCategory(category) {
  if (category === 'Powered by FIWARE') {
    return 'powered';
  } else if (category === 'Platform') {
    return 'powered';
  } else if (category === 'NGSI Ready Devices') {
    return 'ngsi';
  } else if (category === 'FIWARE-Ready') {
    return 'ngsi';
  } else if (category === 'Services') {
    return 'service';
  } else if (category === 'Support Services') {
    return 'service';
  } else if (category === 'Cities4Cities') {
    return 'city';
  } else {
    return 'unknown';
  }
}

function getHash(organization, product) {
  var regex = /([^a-zA-Z0-9À-ÿ])/gi;
  return (
    organization.replace(regex, '').toLowerCase() +
    '-' +
    product.replace(regex, '').toLowerCase()
  );
}

function splitStrings(input) {
  const arr = [];
  input.split(',').forEach(item => {
    if (item.trim() !== '') {
      arr.push(item.trim());
    }
  });
  return arr;
}

csv()
  .fromFile(productDetails)
  .then(input => {
    input.forEach(item => {
      const category = getCategory(item['FIWARE-Ready']);
      const hash = getHash(item['Organisation Name'], item['Product Name']);

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
        description: markdown(item['Description and Benefits']),
        challenge: markdown(item['Challenge and Context']),
        references: markdown(item['References / Customers']),
        awards: markdown(item['Awards']),
        technologies: splitStrings(item['Technologies']),
        domains: splitStrings(item['Domains']),

        docs: getLinkArray(docFields, 'Document', item),
        videos: getLinkArray(mediaFields, 'Media', item),
        materials: getLinkArray(refFields, 'Reference', item),

        logo: item['Logo'],
        featuredImage: item['Featured Image'],
        furtherImages: ''
      };
    });
  })
  .then(() => {
    csv()
      .fromFile(products)
      .then(input => {
        input.forEach(item => {
          const domains = [];
          const tech = [];

          const searchMask = 'fiware';
          const regEx = new RegExp(searchMask, 'ig');
          const replaceMask = 'FIWARE';

          if (item.Status !== 'Deleted') {
            item.Domains.split(',').forEach(item => {
              if (item.trim() !== '') {
                domains.push(item.trim());
              }
            });
            item.Domains = domains;

            item.Technologies.split(',').forEach(item => {
              if (item.trim() !== '') {
                tech.push(item.trim());
              }
            });
            item.Technologies = tech;

            if (item.Member === 'False') {
              item.Member = false;
            }
            if (item.Member === 'True') {
              item.Member = true;
            }
            if (item.iHub === 'False') {
              item.iHub = false;
            }
            if (item.iHub === 'True') {
              item.iHub = true;
            }

            const obj = {};
            obj.company = item['Organisation Name'];
            obj.name = item['Product Name'];
            obj.img = item['Logo'];
            obj.fiwareMember = item.Member;
            obj.fiwareIhub = item.iHub;

            const category = getCategory(item['Category']);
            const hash = getHash(
              item['Organisation Name'],
              item['Product Name']
            );

            if (details[category][hash]) {
              obj.companyLink =
                './product.html?category=' +
                getCategory(item['Category']) +
                '&id=' +
                getHash(item['Organisation Name'], item['Product Name']);
            } else {
              obj.companyLink = item['Product Website'];
            }
            obj.domain = item['Domains'];
            obj.type = item['Type of Product'];
            obj.technology = item['Technologies'];
            obj.year = parseInt(item['Certified in']);
            obj.content = item['Excerpt'].replace(regEx, replaceMask).trim();

            if (item['Category'] === 'Powered by FIWARE') {
              poweredBy.push(obj);
            } else if (item['Category'] === 'NGSI Ready Devices') {
              ready.push(obj);
            } else if (item['Category'] === 'FIWARE-Ready') {
              ready.push(obj);
            } else if (item['Category'] === 'Services') {
              service.push(obj);
            } else if (item['Category'] === 'Support Services') {
              service.push(obj);
            } else if (item['Category'] === 'Cities4Cities') {
              cities.push(obj);
            } else {
              console.log(item['Category']);
            }
          }
        });

        // Products

        fs.writeFile(
          'powered-by-fiware/pageData.js',
          'var pageData = ' + JSON.stringify(poweredBy, null, 2) + ';',
          function(err) {
            if (err) return console.log(err);
          }
        );

        // Devices
        fs.writeFile(
          'ngsi-ready/pageData.js',
          'var pageData = ' + JSON.stringify(ready, null, 2) + ';',
          function(err) {
            if (err) return console.log(err);
          }
        );

        // Services

        fs.writeFile(
          'services/pageData.js',
          'var pageData = ' + JSON.stringify(service, null, 2) + ';',
          function(err) {
            if (err) return console.log(err);
          }
        );

        // Cities

        fs.writeFile(
          'cities4cities/pageData.js',
          'var pageData = ' + JSON.stringify(cities, null, 2) + ';',
          function(err) {
            if (err) return console.log(err);
          }
        );

        // Details

        fs.writeFile(
          'products/pageData.js',
          'var pageData = ' + JSON.stringify(details, null, 2) + ';',
          function(err) {
            if (err) return console.log(err);
          }
        );
      });
  });
