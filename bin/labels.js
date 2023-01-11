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
  fiware: _.clone(DEFAULT_LABELS),
  fisab: _.clone(DEFAULT_LABELS)
};

// Page specific titles - add one for each page
labels.fiware.title = 'FIWARE Team';
labels.fisab.title = 'FISAB Team';

//  Specific Label overrides for FIWARE Team
labels.fiware.countries = 'Working Location';
labels.fiware.allCountries = 'All Locations';

function getLabels(type) {
  return labels[type];
}

exports.getLabels = getLabels;
