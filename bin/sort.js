const _ = require('underscore');

/**
 *  Sort order all lower case
 */
const caseInsensitive = function (i) {
    return i ? i.toLowerCase() : '';
};

/**
 *  Sort an array of data
 */
function sortData(input, attr) {
    return _.sortBy(
        _.uniq(
            _.map(input, function (el) {
                return el[attr] ? el[attr] : '';
            })
        ),
        caseInsensitive
    );
}

/**
 *  Sort and flatten an array of arrays of data
 */
function flatSortData(input, attr) {
    return _.sortBy(
        _.uniq(
            _.flatten(
                _.map(input, function (el) {
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
