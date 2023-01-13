const _ = require('underscore');

const DEFAULT_LABELS = {
  companies: 'Company',
  departments: 'Department',
  countries: 'Countries',
  roles: 'Role',
  domains: 'Domain',
  committees: 'Committee',
  types: 'Speaker Type',
  allCompanies: 'All Companies',
  allDepartments: 'All Departments',
  allCountries: 'All Locations',
  allRoles: 'All Roles',
  allDomains: 'All Domains',
  allCommittees: 'All Committees',
  allTypes: 'All Speaker Types',

  html: 'people.html',
  pageData: 'peopleModal.html',
  filterHtml: 'peopleFilter.html'
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
PEOPLE_DATA.team.countries = 'Country of Origin';
PEOPLE_DATA.team.allCountries = 'All Locations';

PEOPLE_DATA.bod.domains = 'Member Type';
PEOPLE_DATA.bod.allDomains = 'All Types';

PEOPLE_DATA.tsc.domains = 'Member Type';
PEOPLE_DATA.tsc.allDomains = 'All Types';
PEOPLE_DATA.tsc.companies = 'Organization';
PEOPLE_DATA.tsc.allCompanies = 'All Organizations';

PEOPLE_DATA.msc.domains = 'Committees';
PEOPLE_DATA.msc.allDomains = 'All Committees';
PEOPLE_DATA.msc.companies = 'Organization';
PEOPLE_DATA.msc.allDompanies = 'All Organizations';

function getPeopleData(type) {
  return PEOPLE_DATA[type];
}

exports.getPeopleData = getPeopleData;
