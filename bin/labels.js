const labels = {
  fiware: {
    title: 'FIWARE Team',
    departments: 'Department',
    countries: 'Working Location',
    roles: 'Role',
    domains: 'Domain',
    allDepartments: 'All Departments',
    allCountries: 'All Locations',
    allRoles: 'All Roles',
    allDomains: 'All Domains'
  }
};

function getLabels(type) {
  return labels[type];
}

exports.getLabels = getLabels;
