const _ = require('underscore');

const DEFAULT_LABELS = {
  departments: 'Department',
  countries: 'Countries',
  roles: 'Role',
  domains: 'Domain',
  allDepartments: 'All Departments',
  allCountries: 'All Locations',
  allRoles: 'All Roles',
  allDomains: 'All Domains'
};

// Base data - add one for each page
const labels = {
  bod: _.clone(DEFAULT_LABELS),
  boo: _.clone(DEFAULT_LABELS),
  fisab: _.clone(DEFAULT_LABELS),
  msc: _.clone(DEFAULT_LABELS),
  team: _.clone(DEFAULT_LABELS),
  tsc: _.clone(DEFAULT_LABELS),
  speakers: _.clone(DEFAULT_LABELS)
};

// Page specific titles - add one for each page
labels.fisab.title = 'Scientific Advisory Board';
labels.bod.title = 'Board of Directors';
labels.boo.title = 'Board of Officers';
labels.msc.title = 'Mission Support Committees';
labels.team.title = 'FIWARE Team';
labels.tsc.title = 'Mission Support Committee';
labels.speakers.title = 'Speakers';

//  Specific Label overrides for FIWARE Team
labels.team.countries = 'Working Location';
labels.team.allCountries = 'All Locations';

function getLabels(type) {
  return labels[type];
}

exports.getLabels = getLabels;
