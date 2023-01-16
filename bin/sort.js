const _ = require('underscore');

const caseInsensitive = function(i) {
  return i ? i.toLowerCase() : '';
};

function sortData(input, attr) {
  return _.sortBy(
    _.uniq(
      _.map(input, function(el) {
        return el[attr] ? el[attr] : '';
      })
    ),
    caseInsensitive
  );
}

function flatSortData(input, attr) {
  return _.sortBy(
    _.uniq(
      _.flatten(
        _.map(input, function(el) {
          return el[attr] ? el[attr] : '';
        })
      )
    ),
    caseInsensitive
  );
}

exports.caseInsensitive = caseInsensitive;
exports.sortData = sortData;
exports.flatSortData = flatSortData;
