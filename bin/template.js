
const Handlebars = require('handlebars');
const path = require('path');
const fs = require('fs-extra');
const _ = require('underscore');
const nodeHtmlToImage = require('node-html-to-image');

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


function readCSS( page , attr) {
    return  fs.readFileSync(
        path.join(__dirname, `./../css/${page}-${attr}.css`),
        { encoding: 'utf-8' });
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

function parseDate(data) {
    return Date.parse(data);
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
    if (data && data.length > 25){
        const last = data.substring(0, 25).lastIndexOf(' ')
        return `${data.substring(0, last)}<br/>${data.substring(last)}`
    }
    return data;
}

Handlebars.registerHelper('createClasses', createClasses);
Handlebars.registerHelper('createClass', createClass);
Handlebars.registerHelper('createAnchor', createAnchor);
Handlebars.registerHelper('appendTexts', appendTexts);
Handlebars.registerHelper('formatDate', formatDate);
Handlebars.registerHelper('parseDate', parseDate);
Handlebars.registerHelper('rating', rating);
Handlebars.registerHelper('json', stringify);
Handlebars.registerHelper('math', math);
Handlebars.registerHelper('multiline', multiline);

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

exports.font = font;
exports.write = write;
exports.clean = clean;
exports.readCSS = readCSS;
exports.cleanDir = cleanDir;
exports.createClass = createClass;
exports.createSocialMediaImages = createSocialMediaImages;
