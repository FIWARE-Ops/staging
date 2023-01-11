const _ = require('underscore');

const DEFAULT_LABELS = {
  companies: "Company",
  departments: "Department",
  countries: "Countries",
  roles: "Role",
  domains: "Domain",
  committees: "Committee",
  types: "Speaker Type",
  allCompanies: "All Companies",
  allDepartments: "All Departments",
  allCountries: "All Locations",
  allRoles: "All Roles",
  allDomains: "All Domains",
  allCommittees: "All Committees",
  allTypes: "All Speaker Type",
};

// Base data - add one for each page
const labels = {
  bod: _.clone(DEFAULT_LABELS),
  fisab: _.clone(DEFAULT_LABELS),
  msc: _.clone(DEFAULT_LABELS),
  team: _.clone(DEFAULT_LABELS),
  speakers: _.clone(DEFAULT_LABELS),
  experts: _.clone(DEFAULT_LABELS),
  evangelists: _.clone(DEFAULT_LABELS),
};

// Page specific titles - add one for each page
labels.fisab.title = 'Scientific Advisory Board';
labels.bod.title = 'Board of Directors';
labels.msc.title = 'Mission Support Committee';
labels.team.title = 'FIWARE Team';
labels.speakers.title = 'Speakers';
labels.experts.title = "Experts";
labels.evangelists.title = "Evangelists";

//  Specific Label overrides for FIWARE Team
labels.team.countries = 'Location';
labels.team.allCountries = 'All Locations';

function getLabels(type) {
  return labels[type];
}

exports.getLabels = getLabels;
