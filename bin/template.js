const Handlebars = require('handlebars');
const path = require('path');
const fs = require('fs-extra');

Handlebars.registerHelper({
  eq: (v1, v2) => v1 === v2,
  ne: (v1, v2) => v1 !== v2,
  lt: (v1, v2) => v1 < v2,
  gt: (v1, v2) => v1 > v2,
  lte: (v1, v2) => v1 <= v2,
  gte: (v1, v2) => v1 >= v2,
  and() {
    return Array.prototype.every.call(arguments, Boolean);
  },
  or() {
    return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
  }
});

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

Handlebars.registerHelper('createClass', createClass);
Handlebars.registerHelper('rating', rating);

function write(filename, template, input) {
  readTemplate(template, function(err, data) {
    if (!err) {
      const template = Handlebars.compile(data);

      const output = template(input);

      fs.ensureFileSync(filename);
      fs.writeFile(filename, output, function(err) {
        if (err) return console.log(err);
      });
    } else {
      console.log(err);
    }
  });
}

function readTemplate(template, callback) {
  const filePath = path.join(__dirname, '..', template);
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

exports.write = write;
exports.writeFile = writeFile;
exports.writeFilters = writeFilters;
