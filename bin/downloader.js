const sizeOf = require('image-size');
const download = require('image-downloader');
const got = require('got');
const fs = require('fs-extra');
const csv = require('csvtojson');
const path = require('path');
const sharp = require('sharp');

const UPLOAD = process.env.UPLOAD ?  new RegExp(`${process.env.UPLOAD}.*`, 'ig') : null;
const DOWNLOAD = process.env.DOWNLOAD ?  new RegExp(`${process.env.DOWNLOAD}.*`, 'ig') : null;


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

function urlExists(url, name) {
    return new Promise((resolve, reject) => {
        if  (name.match(UPLOAD)){
            process.stdout.write('^');
            return resolve(name)
        } else if (name.match(DOWNLOAD)) {
            fetch(url, { method: 'GET' }, 10000)
                .then(function(resp) {
                    process.stdout.write(resp.ok ? 'v' : '?');
                    return resp.ok ? resp.blob() : null;
                 })
                .then(async function(blob) {
                    if(!blob){
                        return resolve(name);
                    }
                    var buffer = await blob.arrayBuffer();
                    buffer = Buffer.from(buffer)
                    const file = path.join(__dirname, '../images', name);
                    fs.createWriteStream(file).write(buffer);
                    return resolve(null);
                })
                .catch((e) => {
                    console.log(e);
                    return resolve(null);
                });
        } else {
        fetch(url, { method: 'HEAD' }, 10000)
            .then((data, err) => {
                process.stdout.write(data.ok ? '.' : 'X');
                return err ? reject(err) : resolve(data.status !== 200 ? name : null);
            })
            .catch((e) => {
                console.log('timeout');
                resolve(null);
            });
        }
    });
}

function logMissing(missing) {
    const count = missing.filter(Boolean).length;
    if (count > 0) {
        console.log(`${count} new files needed`);
    }
}

function logUploads(files) {
    const count = files.filter(Boolean).length;
    if (count > 0) {
        console.log(`${count} new files uploaded`);
    }
}

async function validateUploads(items) {
    const validFiles = [];
    for (const item of items) {
        const file = path.join(__dirname, '../images', item);
        const exist = await checkFileExists(file);
        if (!exist) {
            console.log(`MISSING IMAGE: ${item}`);
            continue;
        }
        validFiles.push(item);
    }
    return validFiles;
}

async function checkImages(items, image, base) {
    const promises = [];
    const missing = [];
    let count = 0;

    console.log(`Checking ${items.length} Images`);
    console.log();
    for (const item of items) {
        let value = await urlExists(item[image], item[base]);
        if (value) {
            missing.push(value);
        }
        count++;
        if (count % 60 === 0) {
            console.log();
        }
    }
    console.log();
    return missing;
}

function uploadImages(items, filepath, height = 201, width = 360) {
    items.forEach((item) => {
        uploadImage(item, filepath, height, width);
    });
}

async function uploadImage(filename, filepath, height, width) {
    fs.rmSync(path.join(__dirname, '../assets'), { recursive: true, force: true });
    const dir = path.join(__dirname, '..', filepath);
    const file = path.join(__dirname, '../images', filename);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    await resizeImage(file, path.join(dir, filename), height, width);
    await formatImage(path.join(dir, filename), 'webp');
}

async function resizeImage(file, toFile, height, width) {
    await sharp(file).resize({ width, height}).toFile(toFile);
}

async function formatImage(file, format) {
    const base = path.basename(file, path.extname(file));
    const dir = path.dirname(file);
    await sharp(file)
        .toFormat(format, { palette: true })
        .toFile(path.join(dir, `${base}.${format}`));
}

/**
 * Read data from a URL
 */
function fetchData(url) {
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
        console.log(`Retrieving ${file}`);
        //console.log(url)
        fetchData(url).then((data) => {
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
exports.logMissing = logMissing;
exports.logUploads = logUploads;
exports.validateUploads = validateUploads;
exports.uploadImages = uploadImages;
exports.checkImages = checkImages;
exports.load = loadCSV;
