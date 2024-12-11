const _ = require('underscore');

const DEFAULT_LABELS = {
    companies: 'Organisation',
    departments: 'Department',
    countries: 'Countries',
    roles: 'Role',
    domains: 'Domain',
    committees: 'Committee',
    types: 'Speaker Type',
    allCompanies: 'All Organisations',
    allDepartments: 'All Departments',
    allCountries: 'All Locations',
    allRoles: 'All Roles',
    allDomains: 'All Domains',
    allCommittees: 'All Committees',
    allTypes: 'All Types'
};

// Base data - add one for each page
const PEOPLE_DATA = {
    bod: _.clone(DEFAULT_LABELS),
    boo: _.clone(DEFAULT_LABELS),
    experts: _.clone(DEFAULT_LABELS),
    evangelists: _.clone(DEFAULT_LABELS),
    fisab: _.clone(DEFAULT_LABELS),
    msc: _.clone(DEFAULT_LABELS),
    team: _.clone(DEFAULT_LABELS),
    tsc: _.clone(DEFAULT_LABELS),
    speakers: _.clone(DEFAULT_LABELS)
};

// Page specific titles - add one for each page
PEOPLE_DATA.bod.title = 'Board of Directors';
PEOPLE_DATA.boo.title = 'Board of Officers';
PEOPLE_DATA.fisab.title = 'Scientific Advisory Board';
PEOPLE_DATA.experts.title = 'Experts';
PEOPLE_DATA.evangelists.title = 'Evangelists';
PEOPLE_DATA.msc.title = 'Mission Support Committees';
PEOPLE_DATA.team.title = 'FIWARE Team';
PEOPLE_DATA.tsc.title = 'Technical Steering Committee';
PEOPLE_DATA.speakers.title = 'Speakers';

//  Specific Label overrides for FIWARE Team
PEOPLE_DATA.team.countries = 'Location';
PEOPLE_DATA.team.allCountries = 'All Locations';

//  Specific Label overrides for Board of Directors
PEOPLE_DATA.bod.domains = 'Member Type';
PEOPLE_DATA.bod.allDomains = 'All Member Types';

//  Specific Label overrides for Technical Steering Committee
PEOPLE_DATA.tsc.domains = 'Member Type';
PEOPLE_DATA.tsc.allDomains = 'All Member Types';

//  Specific Label overrides for Mission Support Committees
PEOPLE_DATA.msc.domains = 'Committees';
PEOPLE_DATA.msc.allDomains = 'All Committees';

//  Specific Label overrides for Scientific Advisory Board
PEOPLE_DATA.fisab.domains = 'Member Type';
PEOPLE_DATA.fisab.allDomains = 'All Member Types';

//  Specific Label overrides for Speakers
PEOPLE_DATA.speakers.domains = 'Speaker Type';
PEOPLE_DATA.speakers.allDomains = 'All Speaker Types';

function getPeopleData(type) {
    return PEOPLE_DATA[type];
}

exports.getPeopleData = getPeopleData;
