const csv = require('csvtojson');
const _ = require('underscore');
const Prettier = require('prettier');
const Parser = require('../dataParser');
const Downloader = require('../downloader');
const Template = require('../template');
const CATEGORIES = ['powered', 'ready', 'services', 'cities'];
const TEMPLATE_PATH = 'bin/showcase/';
const IMAGES_DIR = 'marketplace/images';
const fs = require('fs');

const GEN_CONTENT = !!process.env.GEN_CONTENT || false;

let productDetails;

const docFields = ['Tech Documentation', 'Doc 2', 'Doc 3', ' Doc 4', 'Doc 5'];
const mediaFields = ['Media', 'Media 2', 'Media 3', 'Media 4', 'Media 5'];
const refFields = ['Reference Material', 'Material 2', 'Material 3', 'Material 4', 'Material 5'];

const path = require('path');
const LOGO_DIR = 'directories/showcase/logo';

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of product details for later use
 */
function extractProductDetails(input) {
    const images = [];
    const details = {
        powered: {},
        ready: {},
        cities: {},
        services: {},
        unknown: {}
    };

    if (input.length === 0) {
        console.error('ERROR: No Product Details uploaded.');
        process.exit(1);
    }

    for (const item of input) {
        const category = Parser.getCategory(item.Category);
        const hash = Parser.getHash(item['Organisation Name'], item['Product Name']);
        let additionalText = '';
        try {
            additionalText = fs.readFileSync(path.join(__dirname, `../../marketplace/texts/${hash}.html`)).toString();
        } catch (e){
            // Nothing
        }
        details[category][hash] = {
            category: item.Category,
            organisationName: item['Organisation Name'],
            productName: item['Product Name'],
            organisationWebsite: item['Organisation Website'],
            organisationEmail: item['Organisation Email'] !== '' ? 'mailto:' + item['Organisation Email'] : '',
            linkedIn: item.LinkedIn,
            twitter: item.Twitter,
            productWebsite: item['Product Website'],
            excerpt: item.Excerpt.replaceAll(/\\'/g, "'"),
            yearOfValidation: parseInt(item['Year of validation']),
            description: Parser.markdown(item['Description and Benefits']),
            challenge: Parser.markdown(item['Challenge and Context']),
            references: Parser.markdown(item['References / Customers']),
            awards: Parser.markdown(item.Awards),
            technologies: Parser.splitStrings(item.Technologies),
            domains: Parser.splitStrings(item.Domains),

            docs: Parser.getLinkArray(docFields, 'Document', item),
            videos: Parser.getLinkArray(mediaFields, 'Media', item),
            materials: Parser.getLinkArray(refFields, 'Reference', item),
            additionalText,
            logo: item.Logo,
            logoName: item['Logo Name'],
            featuredImage: item['Featured Image'],
            furtherImages: ''
        };

        if (item['Featured Image']) {
            const file =
                'hero_' + item['Organisation Name'] + '_' + item['Product Name'] + path.extname(item['Featured Image']);
            images.push([file, item['Featured Image']]);
        }
    }

    return { details, images };
}

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of products summaries for later use
 */
function extractSummaryInfo(input, details) {
    const powered = [];
    const ready = [];
    const services = [];
    const cities = [];

    const hashes = {
        powered: [],
        ready: [],
        cities: [],
        services: [],
        unknown: []
    };

    if (input.length === 0) {
        console.error('ERROR: No Product Summaries uploaded.');
        process.exit(1);
    }

    input.forEach((item) => {
        const domains = [];
        const tech = [];

        const searchMask = 'fiware';
        const regEx = new RegExp(searchMask, 'ig');
        const replaceMask = 'FIWARE';

        const hash = Parser.getHash(item['Organisation Name'], item['Product Name']);

        const category = Parser.getCategory(item.Category);

        if (item.Status !== 'Deleted') {
            if (item.Domains) {
                item.Domains.split(',').forEach((item) => {
                    if (item.trim() !== '') {
                        domains.push(item.trim());
                    }
                });
                item.Domains = domains;
            } else {
                console.log('NO DOMAIN: ', category, hash);
                item.Domains = [];
            }

            if (item.Technologies) {
                item.Technologies.split(',').forEach((item) => {
                    if (item.trim() !== '') {
                        tech.push(item.trim());
                    }
                });
                item.Technologies = tech;
            } else {
                console.log('NO TECHNOLOGY: ', category, hash);
                item.Technologies = [];
            }

            item.Member = item.Member ? item.Member.toLowerCase() : 'false';
            item.iHub = item.iHub ? item.iHub.toLowerCase() : 'false';

            if (item.Member === 'false') {
                item.Member = false;
            }
            if (item.Member === 'true') {
                item.Member = true;
            }
            if (item.iHub === 'false') {
                item.iHub = false;
            }
            if (item.iHub === 'true') {
                item.iHub = true;
            }

            const obj = {};
            obj.company = item['Organisation Name'];
            obj.name = item['Product Name'];
            obj.img = item.Logo;
            obj.logoName = item['Logo Name'];
            obj.fiwareMember = item.Member;
            obj.fiwareIhub = item.iHub;

            if (details[category][hash]) {
                obj.companyLink = '../product-details/?category=' + category + '&id=' + hash;
            } else {
                console.log('FALLBACK LINK:  ' + category + ' ' + hash);
                obj.companyLink = item['Product Website'];
            }
            obj.domain = item.Domains;
            obj.type = item['Type of Product'];
            obj.technology = item.Technologies;
            obj.year = parseInt(item['Certified in']);
            obj.content = item.Excerpt
                ? item.Excerpt.replace(regEx, replaceMask).replaceAll(/\r\n/g, ' ').replaceAll(/\n/g, ' ').trim()
                : '';

            if (item.Category === 'Powered by FIWARE') {
                powered.push(obj);
                hashes.powered.push(hash);
            } else if (item.Category === 'NGSI Ready Devices') {
                ready.push(obj);
                hashes.ready.push(hash);
            } else if (item.Category === 'FIWARE-Ready') {
                ready.push(obj);
                hashes.ready.push(hash);
            } else if (item.Category === 'Services') {
                services.push(obj);
                hashes.services.push(hash);
            } else if (item.Category === 'Support Services') {
                services.push(obj);
                hashes.services.push(hash);
            } else if (item.Category === 'Cities4Cities') {
                cities.push(obj);
                hashes.cities.push(hash);
            } else {
                console.log('UNKNOWN CATEGORY: ', item.Category);
            }
        }
    });
    return { powered, ready, services, cities, hashes };
}

function extractFeatured(summaryInfo) {
    const featured = [];
    const extract = [
        ...summaryInfo.powered.slice(-4),
        ...summaryInfo.ready.slice(-4)
        //   ...summaryInfo.services.slice(-2),
        //   ...summaryInfo.cities.slice(-2)
    ];

    extract.forEach((item) => {
        const featuredItem = _.clone(item);
        if (featuredItem.companyLink.startsWith('..')) {
            featuredItem.companyLink = featuredItem.companyLink.substring(1);
        }
        featured.push(featuredItem);
    });
    return featured;
}

function relatedProducts(product, allCategories, category) {
    const regex = /([^a-zA-Z0-9À-ÿ])/gi;
    const productHash = Parser.getHash(product.company, product.name);
    const companyHash = product.company.replace(regex, '').toLowerCase();

    const related = [];

    _.keys(allCategories).forEach((category) => {
        allCategories[category].forEach((hash) => {
            if (hash !== productHash && hash.startsWith(companyHash + '-')) {
                const product = findProduct(hash, category);
                if (product) {
                    related.push(product);
                }
            }
        });
    });
    if (!_.isEmpty(related) && productDetails.details[category][productHash]) {
        productDetails.details[category][productHash].related = related;
    }
}


function tempArray (summaryInfo){
    arr = [];
    _.each(summaryInfo.powered, (item)=>{
        arr.push({img : item.img, image: item.logoName})
    });
    _.each(summaryInfo.ready, (item)=>{
        arr.push({img : item.img, image: item.logoName})
    });
    _.each(summaryInfo.services, (item)=>{
        arr.push({img : item.img, image: item.logoName})
    });
    _.each(summaryInfo.cities, (item)=>{
        arr.push({img : item.img, image: item.logoName})
    });    
    return arr;
}

function uploadImages(summaryInfo) {

    const items = tempArray (summaryInfo);

    return Downloader.checkImages(items, 'img', 'image')
        .then((missingImages) => {
            Downloader.logMissing(missingImages);
            return Downloader.validateUploads(missingImages);
        })
        .then((uploads) => {
            Downloader.uploadImages(uploads, path.join('assets', LOGO_DIR));
            Downloader.logUploads(uploads);
            return uploads;
        });
}

function findProduct(hash, category) {
    const product = productDetails.details[category][hash];

    if (!product) {
        console.log('DATA MISMATCH: ', category, hash);
    }

    return product
        ? {
              category: product.category,
              featuredImage: product.featuredImage,
              excerpt: product.excerpt,
              productName: product.productName,
              companyLink: './?category=' + category + '&id=' + hash
          }
        : null;
}

function createSocialMedia(products, dir, category) {
    _.each(products, (product) => {
        const filename = path.join(
            Template.createClass(product.organisationName)
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, ''),
            Template.createClass(product.productName)
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
        );

        product.hash = Parser.getHash(product.organisationName, product.productName);
        product.cat = category;
        product.social = path.join('/', dir, `/${filename}.html`);

        Template.write(
            path.join('marketplace', dir, `${filename}.html`),
            path.join(TEMPLATE_PATH, 'social-media.hbs'),
            product
        );
        Prettier.format(path.join('marketplace', dir, `/${filename}.html`), { parser: 'html' });
    });

    Template.write(path.join('showcase', dir, `sitemap.html`), path.join(TEMPLATE_PATH, 'sitemap-html.hbs'), products);
    Template.write(path.join('marketplace', dir, `sitemap.xml`), path.join(TEMPLATE_PATH, 'sitemap-xml.hbs'), products);
}

async function generateContent(optIn, products, type){
    const hashes = _.map(optIn, (item)=>{
        const hash = Parser.getHash(item.company, item.name);
        return hash;
    })
    console.log(`Generating Premium Content for ${type}`);

    for (const item of _.pairs(products)) {
        if (hashes.includes(item[0])){
            let text = await Downloader.getTextContent(item[1]);

            const filename =  path.join(__dirname, `../../marketplace/texts/${item[0]}.html`)
            fs.writeFile(filename, text, function (err) {
                if (err) return console.log(err);
            });
        }
    }
    console.log();

}

function generateHTML(allProducts, summaryInfo) {
    if (fs.existsSync('marketplace')) {
        Template.cleanDir('marketplace/powered-by-fiware/');
        Template.cleanDir('marketplace/fiware-ready/');
        Template.cleanDir('marketplace/support-services/');
        Template.cleanDir('marketplace/cities4cities');
        //fs.rmSync('marketplace', { recursive: true });
    }

    Template.write('showcase/powered-by-fiware/pageData.js', path.join(TEMPLATE_PATH, 'modal.hbs'), {
        members: _.where(summaryInfo.powered, { fiwareMember: true }),
        nonMembers: _.where(summaryInfo.powered, { fiwareMember: false })
    });
    Prettier.format('showcase/powered-by-fiware/pageData.js', { parser: 'flow' });
    console.log('');
    createSocialMedia(allProducts.details.powered, 'powered-by-fiware/', 'powered');
    console.log(summaryInfo.powered.length + ' Products');

    Template.write('showcase/fiware-ready/pageData.js', path.join(TEMPLATE_PATH, 'modal.hbs'), {
        members: _.where(summaryInfo.ready, { fiwareMember: true }),
        nonMembers: _.where(summaryInfo.ready, { fiwareMember: false })
    });
    Prettier.format('showcase/fiware-ready/pageData.js', { parser: 'flow' });
    createSocialMedia(allProducts.details.ready, 'fiware-ready/', 'ready');
    console.log(summaryInfo.ready.length + ' Devices');

    Template.write('showcase/support-services/pageData.js', path.join(TEMPLATE_PATH, 'modal.hbs'), {
        members: _.where(summaryInfo.services, { fiwareMember: true }),
        nonMembers: _.where(summaryInfo.services, { fiwareMember: false })
    });
    Prettier.format('showcase/support-services/pageData.js', { parser: 'flow' });
    createSocialMedia(allProducts.details.services, 'support-services/', 'services');
    console.log(summaryInfo.services.length + ' Services');

    Template.write('showcase/cities4cities/pageData.js', path.join(TEMPLATE_PATH, 'modal.hbs'), {
        members: _.where(summaryInfo.cities, { fiwareMember: true }),
        nonMembers: _.where(summaryInfo.cities, { fiwareMember: false })
    });
    Prettier.format('showcase/cities4cities/pageData.js', { parser: 'flow' });
    createSocialMedia(allProducts.details.cities, 'cities4cities/', 'cities');
    console.log(summaryInfo.cities.length + ' Cities');

    Template.write(
        'showcase/product-details/pageData.js',
        path.join(TEMPLATE_PATH, 'productDetails.hbs'),
        productDetails.details
    );
    Prettier.format('showcase/product-details/pageData.js', { parser: 'flow' });

    const featured = extractFeatured(summaryInfo);
    Template.write('showcase/product-details/featured.html', path.join(TEMPLATE_PATH, 'featured.hbs'), featured);
    Prettier.format('showcase/product-details/featured.html', { parser: 'html' });

    return summaryInfo;
}

/**
 * Read in the product details file and output
 * HTML and JavaScript files
 */
function parse(detailsFile, summaryFile) {
    csv()
        .fromFile(detailsFile)
        .then((input) => {
            return extractProductDetails(input);
        })
        .then((allProducts) => {
            // Remember all feature images for later processing.
            productDetails = allProducts;

            csv()
                .fromFile(summaryFile)
                .then((input) => {
                    return extractSummaryInfo(input, allProducts.details);
                })
                .then((summaryInfo) => {
                    CATEGORIES.forEach((category) => {
                        summaryInfo[category].forEach((prod) => {
                            relatedProducts(prod, summaryInfo.hashes, category);
                        });
                    });
                    return summaryInfo;
                })
                .then((summaryInfo) => {
                    if (summaryInfo.powered.length === 0) {
                        console.error('ERROR: No Products Generated.');
                        process.exit(1);
                    }
                    if (summaryInfo.ready.length === 0) {
                        console.error('ERROR: No Devices Generated.');
                        process.exit(1);
                    }
                    if (summaryInfo.services.length === 0) {
                        console.error('ERROR: No Devices Generated.');
                        process.exit(1);
                    }
                    if (summaryInfo.cities.length === 0) {
                        console.error('ERROR: No Devices Generated.');
                        process.exit(1);
                    }
                    return summaryInfo;
                })
                .then((summaryInfo) => {
                    return generateHTML(allProducts, summaryInfo);
                })
                .then((summaryInfo) => {
                    return GEN_CONTENT ? generateContent(
                        _.where(summaryInfo.powered, { fiwareMember: true }),
                        allProducts.details.powered, 'products')
                        .then(() => {
                            return summaryInfo;
                        }): summaryInfo;
                })
                .then((summaryInfo) => {
                    return GEN_CONTENT ? generateContent(
                        _.where(summaryInfo.ready, { fiwareMember: true }),
                        allProducts.details.ready, 'devices')
                        .then(() => {
                            return summaryInfo;
                        }): summaryInfo;
                })
                .then((summaryInfo) => {
                    return GEN_CONTENT ? generateContent(
                        _.where(summaryInfo.services, { fiwareMember: true }),
                        allProducts.details.services, 'services')
                        .then(() => {
                            return summaryInfo;
                        }): summaryInfo;
                })
                .then((summaryInfo) => {
                    return GEN_CONTENT ? generateContent(
                        _.where(summaryInfo.cities, { fiwareMember: true }),
                        allProducts.details.cities, 'cities')
                        .then(() => {
                            return summaryInfo;
                        }): summaryInfo;
                })
                
                .then((summaryInfo) => {
                    Downloader.emptyAssets();
                    return uploadImages(summaryInfo).then(() => {
                        return summaryInfo;
                    });
                })
        })
       
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
