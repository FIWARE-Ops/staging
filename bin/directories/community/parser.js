const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../../dataParser');
const Sorter = require('../../sort');
const Template = require('../../template');
const TEMPLATE_PATH = 'bin/directories/community/';
const COMMUNITY_DIR = 'directories/community';
const CITIES_DIR = 'directories/cities';
const IHUBS_DIR = 'directories/ihubs';
const ORGANISATIONS_DIR = 'directories/organisations';

/**
 * Generate HTML and JavaScript files
 */
function generateMap() {
    Template.concatGeoJSON(
        path.join(COMMUNITY_DIR, 'community.json'),
        path.join(CITIES_DIR, 'cities.json'),
        path.join(IHUBS_DIR, 'iHubs.json'),
        path.join(ORGANISATIONS_DIR, 'organisations.json')
    );

    const searchObj = Template.getSearchKeys(path.join(COMMUNITY_DIR, 'community.json'));

    Template.write(path.join(COMMUNITY_DIR, 'search.js'), path.join(TEMPLATE_PATH, 'search.hbs'), {
        keys: {
            cities: Object.keys(Template.getSearchKeys(path.join(CITIES_DIR, 'cities.json'))),
            ihubs: Object.keys(Template.getSearchKeys(path.join(IHUBS_DIR, 'iHubs.json'))),
            members: Object.keys(Template.getSearchKeys(path.join(ORGANISATIONS_DIR, 'organisations.json'))),
            community: Object.keys(searchObj)
        },
        data: searchObj
    });
    Prettier.format(path.join(COMMUNITY_DIR, 'search.js'), { parser: 'flow' });
    console.log('Community Map generated.');
}
exports.generateMap = generateMap;
