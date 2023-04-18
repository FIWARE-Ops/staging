const showdown = require('showdown');
const jsdom = require('jsdom');
const converter = new showdown.Converter();

/**
 * Links can be either URLs or markdown.
 * Take inputs markdown and transform into URLs
 * and transform a series of input fields into an array
 */
function getLinkArray(fields, title, item) {
    const array = [];
    let errors = [];
    fields.forEach((field, i) => {
        if (!item[field] || item[field] === '') {
        } else if (item[field].startsWith('[')) {
            const html = converter.makeHtml(item[field]);
            const dom = new jsdom.JSDOM(html);
            if (dom.window.document.querySelector('a')) {
                array.push([
                    dom.window.document.querySelector('p').textContent,
                    dom.window.document.querySelector('a').getAttribute('href')
                ]);
            } else {
                errors.push(item[field]);
            }
        } else if (item[field].startsWith('http')) {
            array.push([title + ' ' + (i + 1), item[field]]);
        } else {
            errors.push(item[field]);
        }
    });

    if (errors.length) {
        console.log('\n### ' + item['Organisation Name'] + ' - ' + item['Product Name']);
        errors.forEach((error) => {
            console.log(error);
        });
    }
    return array;
}

/**
 *  Take input markdown and transform into HTML.
 *  Tidy up any known artifacts
 */
function markdown(text) {
    const html = text !== '' ? converter.makeHtml(text.replaceAll(/•/g, '\n*').replaceAll(/\'/g, "'")) : '';
    return html
        .replaceAll(/\r\n/g, ' ')
        .replaceAll(/\n/g, ' ')
        .replaceAll(/\\'/g, "'");
}

/**
 * Map the human names used in the input CSV into names
 * usable by the app to avoid spaces.
 */
function getCategory(category) {
    if (category === 'Powered by FIWARE') {
        return 'powered';
    } else if (category === 'Platform') {
        return 'powered';
    } else if (category === 'NGSI Ready Devices') {
        return 'ready';
    } else if (category === 'FIWARE-Ready') {
        return 'ready';
    } else if (category === 'Services') {
        return 'services';
    } else if (category === 'Support Services') {
        return 'services';
    } else if (category === 'Cities4Cities') {
        return 'cities';
    } else {
        return 'unknown';
    }
}

/**
 * Remove special characters and create
 * a usable CSS class for Isotope to filter on.
 */
function getHash(organization, product) {
    const org = organization || '';
    const prod = product || '';
    const regex = /([^a-zA-Z0-9À-ÿ])/gi;
    return org.replace(regex, '').toLowerCase() + '-' + prod.replace(regex, '').toLowerCase();
}

/**
 * Parse a comma separated list as an array
 */
function splitStrings(input) {
    const arr = [];
    (input || '').split(',').forEach((item) => {
        if (item.trim() !== '') {
            arr.push(item.trim());
        }
    });
    return arr;
}

/**
 * Parse True and False as used in the input CSV into proper
 * boolean values
 */
function boolean(input) {
    return input && input.toLowerCase() === 'true';
}

exports.getLinkArray = getLinkArray;
exports.markdown = markdown;
exports.getCategory = getCategory;
exports.getHash = getHash;
exports.splitStrings = splitStrings;
exports.boolean = boolean;
