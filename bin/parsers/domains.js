const csv = require('csvtojson');
const path = require('path');
const _ = require('underscore');

const Prettier = require('prettier');
const Parser = require('../dataParser');
const Template = require('../template');
const TEMPLATE_PATH = 'bin/templates/domains/';
const DOMAINS_DIR = 'directories/domains';

//const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/domains/images/impact-story-default.png';

const regex = /([^a-zA-Z0-9À-ÿ])/gi;

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of domains for later use
 */
function extractDomains(input) {
    const domains = {};

    input.forEach((item) => {
        const domain = item.Domain.replace(regex, '').toLowerCase();
        const publish = Parser.boolean(item.Published);
        const domainCard = {
            order: item.Order,
            title: item.Title,
            description: Parser.markdown(item.Content)
        };

        if (publish) {
            domains[domain] = domains[domain] || [];
            domains[domain].push(domainCard);
        }
    });

    if (_.keys(domains).length === 0) {
        console.error('ERROR: No domains uploaded.');
        process.exit(1);
    }

    _.keys(domains).forEach((domain) => {
        const cards = domains[domain].sort((a, b) => {
            return a.order - b.order;
        });
        domains[domain] = cards;
    });

    console.log(_.keys(domains).length, ' domains generated.');

    return domains;
}

/**
 * Read in the domains file and output
 * HTML and JavaScript files
 */
function parse(file) {
    csv()
        .fromFile(file)
        .then((input) => {
            return extractDomains(input);
        })
        .then((domains) => {
            _.keys(domains).forEach((domain) => {
                Template.write(
                    path.join(DOMAINS_DIR, `${domain}.html`),
                    path.join(TEMPLATE_PATH, 'cards.hbs'),
                    domains[domain]
                );
                Prettier.format(path.join(DOMAINS_DIR, `${domain}.html`), { parser: 'html' });
            });
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'domains.csv';
