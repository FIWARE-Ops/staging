const Handlebars = require('handlebars');
const path = require('path');
const fs = require('fs-extra');
const _ = require('underscore');
const nodeHtmlToImage = require('node-html-to-image');
const QRCode = require('qrcode');

const notFound = `<!doctype html>
<html lang="en-US">
<head>
<title>FIWARE Foundation: Page Not Found</title>
<meta http-equiv="refresh" content="0; url=https://www.fiware.org/404.html" />
</head>
<body/>
</html>`;

const font2base64 = require('node-font2base64');
const font = {
    regular: font2base64.encodeToDataUrlSync(path.join(__dirname, '../fonts/Montserrat-Regular.ttf')),
    bold: font2base64.encodeToDataUrlSync(path.join(__dirname, '../fonts/Montserrat-Bold.ttf')),
    italic: font2base64.encodeToDataUrlSync(path.join(__dirname, '../fonts/Montserrat-Italic.ttf')),
    light: font2base64.encodeToDataUrlSync(path.join(__dirname, '../fonts/Montserrat-Light.ttf')),
    medium: font2base64.encodeToDataUrlSync(path.join(__dirname, '../fonts/Montserrat-Medium.ttf')),
    semibold: font2base64.encodeToDataUrlSync(path.join(__dirname, '../fonts/Montserrat-SemiBold.ttf'))
};
function getSearchKeys(filename) {
    const geoJSON = JSON.parse(fs.readFileSync(filename, { encoding: 'utf8', flag: 'r' }));
    const searchObj = {};
    geoJSON.features.forEach((feature) => {
        if (feature.properties.name) {
            searchObj[feature.properties.name] = feature.geometry.coordinates;
        }
        if (feature.properties.city) {
            searchObj[feature.properties.city] = feature.geometry.coordinates;
        }
    });
    return searchObj;
}
function concatGeoJSON(filename, file1, file2, file3) {
    fs.rmSync(filename, {
        force: true
    });
    const geoJSON1 = JSON.parse(fs.readFileSync(file1, { encoding: 'utf8', flag: 'r' }));
    const geoJSON2 = JSON.parse(fs.readFileSync(file2, { encoding: 'utf8', flag: 'r' }));
    const geoJSON3 = JSON.parse(fs.readFileSync(file3, { encoding: 'utf8', flag: 'r' }));

    geoJSON1.features = geoJSON1.features.concat(geoJSON2.features);
    geoJSON1.features = geoJSON1.features.concat(geoJSON3.features);
    const output = JSON.stringify(geoJSON1);

    fs.ensureFileSync(filename);
    fs.writeFileSync(filename, output);
}

function readCSS(page, attr) {
    return fs.readFileSync(path.join(__dirname, `./../css/${page}/${attr}.css`), { encoding: 'utf-8' });
}

/**
 *  Take a raw dump of an Object as JSON
 */
function stringify(data) {
    return JSON.stringify(data);
}

function createAnchor(data, type, index) {
    if (index < data.length - 1) {
        if (type !== data[index + 1].type) {
            return `<a id="${createClass(data[index + 1].type)}-enablers" class="hidden"></a>`;
        }
    }
    return '';
}

/**
 * Remove special characters and create
 * a usable CSS class for Isotope to filter on.
 */
function createClass(data) {
    let result = '';
    const regex = /([^a-zA-Z0-9À-ÿ])/gi;
    if (typeof data == 'object') {
        data.forEach((element, i) => {
            if (i + 1 === data.length) {
                result += `${element.toLowerCase().replace(regex, '-')}`;
            } else {
                result += `${element.toLowerCase().replace(regex, '-')} `;
            }
        });
    } else {
        result = data ? data.toLowerCase().replace(regex, '-') : '';
    }
    return result;
}

/**
 * Add multiple Isotope usable CSS classes for an
 * input array
 */
function createClasses(data) {
    return _.map(data, function (el) {
        return createClass(el);
    }).join(' ');
}

function formatDate(data) {
    const date = new Date(data);
    return date.toDateString().substring(3);
}

function formatDay(data) {
    return data.substring(0, data.indexOf(' '));
}

function formatMonth(data) {
    return data.substring(data.indexOf(' ') + 1).substring(0, 3);
}

function parseDate(data) {
    return Date.parse(data);
}
function formatYearMonth(data) {
    const date = new Date(data);
    return date.toISOString().split('T')[0].replaceAll('-', '');
}

function formatISO(data) {
    const date = new Date(data);
    return date.toISOString();
}

function appendTexts(data) {
    return _.map(data, function (el) {
        return el;
    }).join(' and ');
}

/**
 * Create a star rating from an integer
 */
function rating(difficulty) {
    let result = '';
    for (let i = 0; i < difficulty; i++) {
        result += '★ ';
    }
    return result;
}

function math(lvalue, operator, rvalue) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);
    return {
        '+': lvalue + rvalue,
        '-': lvalue - rvalue,
        '*': lvalue * rvalue,
        '/': lvalue / rvalue,
        '%': lvalue % rvalue
    }[operator];
}

function multiline(data) {
    if (data && data.length > 25) {
        const last = data.substring(0, 25).lastIndexOf(' ');
        return `${data.substring(0, last)}<br/>${data.substring(last)}`;
    }
    return data;
}
function formatDateCal(date, time) {
    let hour = time.substring(0, time.indexOf(':'));
    if (time.includes('pm')) {
        hour = 12 + parseInt(hour, 10);
    }

    let minute = time.substring(time.indexOf(':') + 1, time.indexOf(':') + 3);

    return (
        new Date().getFullYear() +
        `0${date.getMonth() + 1}`.slice(-2) +
        `0${date.getDate()}`.slice(-2) +
        'T' +
        `00${hour}`.slice(-2) +
        `00${minute}`.slice(-2) +
        '00'
    );
}

function webp(file) {
    return path.format({
        dir: path.dirname(file),
        name: path.basename(file, path.extname(file)),
        ext: 'webp'
    });
}

function embed(data) {
    return data.replace('watch?v=', 'embed/');
}

function calendar(date, startTime, endTime) {
    return formatDateCal(date, startTime) + '/' + formatDateCal(date, endTime);
}

function listSpeakers(speakers) {
    let list = _.map(speakers, function (speaker) {
        return speaker.name;
    });
    return list.concat(',');
}

function includes(array, item) {
    let items = array ? array: [];
    return items.includes(item);
}

function longTitle(data, size) {
    if (data && data.length > size) {
        return `<span style="font-size:80%;">${data}</span>`;
    }
    return data;
}

Handlebars.registerHelper('createClasses', createClasses);
Handlebars.registerHelper('createClass', createClass);
Handlebars.registerHelper('createAnchor', createAnchor);
Handlebars.registerHelper('appendTexts', appendTexts);
Handlebars.registerHelper('formatDate', formatDate);
Handlebars.registerHelper('parseDate', parseDate);
Handlebars.registerHelper('formatDay', formatDay);
Handlebars.registerHelper('formatMonth', formatMonth);
Handlebars.registerHelper('formatYearMonth', formatYearMonth);
Handlebars.registerHelper('formatISO', formatISO);
Handlebars.registerHelper('rating', rating);
Handlebars.registerHelper('json', stringify);
Handlebars.registerHelper('math', math);
Handlebars.registerHelper('multiline', multiline);
Handlebars.registerHelper('longTitle', longTitle);
Handlebars.registerHelper('calendar', calendar);
Handlebars.registerHelper('webp', webp);
Handlebars.registerHelper('includes', includes);
Handlebars.registerHelper('embed', embed);
Handlebars.registerHelper('listSpeakers', listSpeakers);

Handlebars.registerHelper({
    eq: (v1, v2) => v1 === v2,
    ne: (v1, v2) => v1 !== v2,
    lt: (v1, v2) => v1 < v2,
    gt: (v1, v2) => v1 > v2,
    lte: (v1, v2) => v1 <= v2,
    gte: (v1, v2) => v1 >= v2,
    and() {
        return Array.prototype.every.call(arguments, Boolean);
    },
    or() {
        return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
    }
});

/**
 * Output strucuted data using a Handlebars template file
 */
function write(filename, template, input) {
    readTemplate(template, function (err, data) {
        if (!err) {
            const template = Handlebars.compile(data);

            const output = template(input);

            fs.ensureFileSync(filename);
            fs.writeFile(filename, output, function (err) {
                if (err) return console.log(err);
            });
        } else {
            console.log(err);
        }
    });
}

function clean(dir) {
    if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir).filter((el) => path.extname(el) === '.html');
        files.forEach((file) => {
            //fs.unlinkSync( path.join(dir , file));
            fs.writeFileSync(path.join(dir, file), notFound);
        });
    }
}

function cleanDir(dir) {
    function listDirectories(dir) {
        return fs
            .readdirSync(dir, { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => dirent.name);
    }

    listDirectories(dir).forEach((subdir) => {
        clean(path.join(dir, subdir));
    });
}

/**
 * Read in a Handlebars template
 */
function readTemplate(template, callback) {
    const filePath = path.join(__dirname, '..', template);
    fs.readFile(filePath, { encoding: 'utf-8' }, callback);
}

function createSocialMediaImages(content, template) {
    readTemplate(template, async (err, data) => {
        if (!err) {
            console.log('Generating Images');
            await nodeHtmlToImage({ content, html: data });
        } else {
            console.log(err);
        }
    });
}

function qrCodes(path, agenda) {
    console.log('Generating QR Codes');
    agenda.forEach((event) => {
        const url = `https://www.fiware.org${event.social}`;
        const file = `${path}/${createClass(event.title)}.svg`;
        QRCode.toFile(
            file,
            url,
            {
                color: {
                    dark: '#000', // Black dots
                    light: '#0000' // Transparent background
                }
            },
            function (err) {
                if (err) throw err;
            }
        );
    });
}

exports.font = font;
exports.write = write;
exports.clean = clean;
exports.qrCodes = qrCodes;
exports.readCSS = readCSS;
exports.concatGeoJSON = concatGeoJSON;
exports.getSearchKeys = getSearchKeys;
exports.cleanDir = cleanDir;
exports.createClass = createClass;
exports.createSocialMediaImages = createSocialMediaImages;
