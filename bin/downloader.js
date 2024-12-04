const sizeOf = require('image-size');
const download = require('image-downloader');
const got = require('got');
const fs = require('fs-extra');
const csv = require('csvtojson');

/**
 * Within Keys.csv check to see if a matxhing URL can be found.
 */
function extractURL(input, key, target) {
    let data = null;
    input.forEach((item) => {
        const row = {
            key: item['Key'],
            target: item['File'],
            url: item['URL'],
            published: item['Published']
        };

        if (row.key === key && row.target === target) {
            data = row.url;
        }
    });
    return data;
}

/**
 * Check to see if keys.csv exists
 */
function checkFileExists(file) {
    return fs.promises
        .access(file, fs.constants.F_OK)
        .then(() => true)
        .catch(() => false);
}

/**
 * Read data from a URL
 */
function fetch(url) {
    return new Promise(async function (resolve, reject) {
        try {
            const response = await got(url);
            return resolve(response.body);
            //=> '<!doctype html> ...'
        } catch (error) {
            return reject(error.response.body);
            //=> 'Internal server error ...'
        }
    });
}

/**
 * Save a CSV file from a known URL
 */
function downloadFile(file, url) {
    return new Promise((resolve, reject) => {
        console.log(`Retrieving ${file}`)
        //console.log(url)
        fetch(url).then((data) => {
            //console.log(data)
            fs.writeFile(file, data, function (err) {
                return err ? reject(err) : resolve();
            });
        });
    });
}

/**
 * Check to see if a google sheet can be found in the Keys.CSV file,
 * and if present download a newer copy of the data
 */
function loadCSV(key, target) {
    return new Promise((resolve, reject) => {
        checkFileExists('keys.csv').then((exists) => {
            if (!exists) {
                return resolve();
            }

            csv()
                .fromFile('keys.csv')
                .then((input) => {
                    return extractURL(input, key, target);
                })
                .then((url) => {
                    return url ? downloadFile(target, url) : null;
                })
                .then(() => {
                    return resolve();
                })
                .catch((e) => {
                    return reject(e);
                });
        });
    });
}

/**
 *  Reads a file from a URL and downloads it into a folder
 */
function downloadImages(image) {
    return new Promise((resolve, reject) => {
        const file = image[0].replace(/[ ]/g, '_').replace(/[/&]/g, '');
        const options = {
            url: image[1],
            dest: __dirname + '/../images/' + file,
            extractFilename: false,
            timeout: 10000,
            maxRedirects: 3
        };
        download
            .image(options)
            .then(({ filename }) => {
                try {
                    sizeOf(filename, function (err, dimensions) {
                        const height = dimensions ? dimensions.height : '???';
                        const width = dimensions ? dimensions.width : '???';
                        resolve(file + '\t' + height + '\t' + width);
                    });
                } catch {
                    resolve(file + '\t0\t0');
                }
            })
            .catch((err) => {
                console.error(file, err.message);
                //reject(err);
                resolve(file + '\t0\t0');
            });
    });
}

exports.downloadImages = downloadImages;
exports.load = loadCSV;
