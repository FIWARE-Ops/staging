const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../../dataParser');
const Downloader = require('../../downloader');
const Sorter = require('../../sort');
const Template = require('../../template');
const TEMPLATE_PATH = 'bin/directories/open-calls/';
const OPEN_CALLS_DIR = 'directories/open-calls';

const WP_CONTENT_DIR = 'wp-content/directories/open-calls/images';

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of open-calls for later use
 */
function extractOpenCalls(input) {
    const today = new Date();
    const openCalls = [];
    input.forEach((item) => {
        const openCall = {
            name: item.Name,
            grant: item.Grant,
            img: item.Image ? item.Image : '',
            image_name: item['Image Name'] ? item['Image Name'] : 'open-calls-default.png',
            domain: Parser.splitStrings(item.Target),
            closeDate: Parser.date(item['Close Date']),
            type: item.Type,
            website: item.Link,
            content: item.Description,
            publish: Parser.boolean(item.Published)
        };

        //openCall.img = path.join('https://www.fiware.org', WP_CONTENT_DIR, openCall.image_name);
        openCall.image = 'https://www.fiware.org/' + path.join(WP_CONTENT_DIR, openCall.image_name);
        openCall.type = openCall.closeDate < today ? 'Closed' : 'Open';

        if (openCall.publish) {
            openCalls.push(openCall);
        }
    });

    if (openCalls.length === 0) {
        console.error('ERROR: No open calls uploaded.');
        process.exit(1);
    }
    console.log(openCalls.length, ' open calls generated.');

    return openCalls.sort((a, b) => {
        return a.closeDate > b.closeDate.getTime();
    });
}

function generateHTML(openCalls) {
    const filterData = {
        domain: Sorter.flatSortData(openCalls, 'domain'),
        type: Sorter.flatSortData(openCalls, 'type'),
        openCalls
    };

    Template.write(path.join(OPEN_CALLS_DIR, 'open-calls.html'), path.join(TEMPLATE_PATH, 'card.hbs'), openCalls);
    Template.write(path.join(OPEN_CALLS_DIR, 'pageData.js'), path.join(TEMPLATE_PATH, 'modal.hbs'), filterData);
    Template.write(path.join(OPEN_CALLS_DIR, 'filters.html'), path.join(TEMPLATE_PATH, 'filter.hbs'), filterData);

    Prettier.format(path.join(OPEN_CALLS_DIR, 'open-calls.html'), { parser: 'html' });
    Prettier.format(path.join(OPEN_CALLS_DIR, 'pageData.js'), { parser: 'flow' });
    Prettier.format(path.join(OPEN_CALLS_DIR, 'filters.html'), { parser: 'html' });
    return openCalls;
}

function uploadMissingImages(openCalls) {
    console.log('Checking Images');
    return Downloader.checkImages(openCalls, 'image', 'image_name')
        .then((missing) => {
            const count = missing.filter(Boolean).length;
            if (count > 0) {
                console.log(`${count} files missing`);
            }
            return Downloader.uploadImages(missing, WP_CONTENT_DIR);
        })
        .then((files) => {
            const count = files.filter(Boolean).length;
            if (count > 0) {
                console.log(`${count} new files uploaded`);
            }
        });
}

/**
 * Read in the open-calls file and output
 * HTML and JavaScript files
 */
function parse(file) {
    return csv()
        .fromFile(file)
        .then((input) => {
            return extractOpenCalls(input);
        })
        .then((openCalls) => {
            return generateHTML(openCalls);
        })
        .then((openCalls) => {
            uploadMissingImages(openCalls).then(() => {
                return openCalls;
            });
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'open-calls.csv';
