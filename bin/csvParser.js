const Parser = require('./dataParser');
const docFields = ['Tech Documentation', 'Doc 2', 'Doc 3', ' Doc 4', 'Doc 5'];
const mediaFields = ['Media', 'Media 2', 'Media 3', 'Media 4', 'Media 5'];

const refFields = [
  'Reference Material',
  'Material 2',
  'Material 3',
  'Material 4',
  'Material 5'
];

const path = require('path');

function extractWebinars(input) {
  const webinars = [];
  input.forEach(item => {
    const webinar = {
      name: item.name,
      img: item.img,
      companyLink: item.companyLink,
      domain: Parser.splitStrings(item.domain),
      type: item.type,
      technology: Parser.splitStrings(item.technology),
      year: parseInt(item.year),
      difficulty: parseInt(item.difficulty),
      content: Parser.markdown(item.content)
    };
    webinars.push(webinar);
  });
  return webinars;
}

function extractProductDetails(input) {
  const images = [];
  const details = {
    powered: {},
    ready: {},
    cities: {},
    services: {},
    unknown: {}
  };

  input.forEach(item => {
    const category = Parser.getCategory(item['FIWARE-Ready']);
    const hash = Parser.getHash(
      item['Organisation Name'],
      item['Product Name']
    );
    
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

  return { details, images };
}

function extractSummaryInfo(input, details) {
  const powered = [];
  const ready = [];
  const services = [];
  const cities = [];

  const hashes = {
    powered: [],
    ready: [],
    cities: [],
    services: [],
    unknown: []
  };

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

      item.Member = item.Member.toLowerCase();
      item.iHub = item.iHub.toLowerCase();

      if (item.Member == 'false') {
        item.Member = false;
      }
      if (item.Member == 'true') {
        item.Member = true;
      }
      if (item.iHub == 'false') {
        item.iHub = false;
      }
      if (item.iHub == 'true') {
        item.iHub = true;
      }

      const obj = {};
      obj.company = item['Organisation Name'];
      obj.name = item['Product Name'];
      obj.img = item['Logo'];
      obj.fiwareMember = item.Member;
      obj.fiwareIhub = item.iHub;

      const category = Parser.getCategory(item['Category']);
      const hash = Parser.getHash(
        item['Organisation Name'],
        item['Product Name']
      );

      if (details[category][hash]) {
        obj.companyLink =
          '../product-details/?category=' + category + '&id=' + hash;
      } else {
        obj.companyLink = item['Product Website'];
      }
      obj.domain = item['Domains'];
      obj.type = item['Type of Product'];
      obj.technology = item['Technologies'];
      obj.year = parseInt(item['Certified in']);
      obj.content = item['Excerpt'].replace(regEx, replaceMask).trim();

      if (item['Category'] === 'Powered by FIWARE') {
        powered.push(obj);
        hashes.powered.push(hash);
      } else if (item['Category'] === 'NGSI Ready Devices') {
        ready.push(obj);
        hashes.ready.push(hash);
      } else if (item['Category'] === 'FIWARE-Ready') {
        ready.push(obj);
        hashes.ready.push(hash);
      } else if (item['Category'] === 'Services') {
        services.push(obj);
        hashes.services.push(hash);
      } else if (item['Category'] === 'Support Services') {
        services.push(obj);
        hashes.services.push(hash);
      } else if (item['Category'] === 'Cities4Cities') {
        cities.push(obj);
        hashes.cities.push(hash);
      } else {
        console.log(item['Category']);
      }
    }
  });
  return { powered, ready, services, cities, hashes };
}

exports.extractProductDetails = extractProductDetails;
exports.extractSummaryInfo = extractSummaryInfo;
exports.extractWebinars = extractWebinars;
