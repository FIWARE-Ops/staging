const showdown = require('showdown');
const jsdom = require('jsdom');
const converter = new showdown.Converter();

function getLinkArray(fields, title, item) {
  const array = [];
  let errors = [];
  fields.forEach((field, i) => {
    if (!item[field] || item[field] === '') {
    } else if (item[field].startsWith('[')) {
      const html = converter.makeHtml(item[field]);
      const dom = new jsdom.JSDOM(html);
      if (dom.window.document.querySelector('a')) {
        array.push([
          dom.window.document.querySelector('p').textContent,
          dom.window.document.querySelector('a').getAttribute('href')
        ]);
      } else {
        errors.push(item[field]);
      }
    } else if (item[field].startsWith('http')) {
      array.push([title + ' ' + (i + 1), item[field]]);
    } else {
      errors.push(item[field]);
    }
  });

  if (errors.length) {
    console.log(
      '\n### ' + item['Organisation Name'] + ' - ' + item['Product Name']
    );
    errors.forEach(error => {
      console.log(error);
    });
  }
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

exports.getLinkArray = getLinkArray;
exports.markdown = markdown;
exports.getCategory = getCategory;
exports.getHash = getHash;
exports.splitStrings = splitStrings;
