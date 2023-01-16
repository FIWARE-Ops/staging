const csv = require('csvtojson');
const path = require('path');

const Parser = require('../dataParser');
const Sorter = require('../sort');
const Template = require('../template');
const TEMPLATE_PATH = 'bin/webinars/';

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

function parse(file) {
  csv()
    .fromFile(file)
    .then(input => {
      return extractWebinars(input);
    })
    .then(webinars => {
      const filterData = {
        types: Sorter.sortData(webinars, 'type'),
        technologies: Sorter.flatSortData(webinars, 'technology'),
        domains: Sorter.flatSortData(webinars, 'domain')
      };

      Template.write(
        'community/webinar-recordings/webinars.html',
        path.join(TEMPLATE_PATH, 'card.hbs'),
        webinars
      );
      Template.write(
        'community/webinar-recordings/pageData.js',
        path.join(TEMPLATE_PATH, 'modal.hbs'),
        filterData
      );
      Template.write(
        'community/webinar-recordings/filters.html',
        path.join(TEMPLATE_PATH, 'filter.hbs'),
        filterData
      );
    })
    .catch(e => {
      console.log(e);
      return;
    });
}

exports.parse = parse;
