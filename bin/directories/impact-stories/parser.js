const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../../dataParser');
const Sorter = require('../../sort');
const Template = require('../../template');
const Downloader = require('../../downloader');
const TEMPLATE_PATH = 'bin/directories/impact-stories/';
const IMPACT_STORIES_DIR = 'directories/impact-stories';
const ASSETS_DIR = 'uploads';
const FLAGS_DIR = 'directories/people/images/flag';
const THUMB_SIZE = { height: 201, width: 360 };
const IMAGE_SIZE = { height: 745, width: 970 };
const FLAG_SIZE = { height: 120, width: 120 };

const DEFAULT_IMAGE = 'impact-story-default.png';

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of impactStories for later use
 */
function extractStories(input) {
    const impactStories = [];
    let featuredStory = null;

    input.forEach((item) => {
        const impactStory = {
            name: item.Name,
            year: item.Year,
            image: item['Featured Image'] ? item['Featured Image'] : '',
            thumb: item.Thumb ? item.Thumb : DEFAULT_IMAGE,
            domain: Parser.splitStrings(item.Domain),
            type: item.Type,
            medium: item.Medium,
            pdf: item.PDF,
            website: item.Website,
            language: item.Language,
            flag: item['Country flag'],
            excerpt: item.Excerpt,
            description: item.Description,
            publish: Parser.boolean(item.Published),
            featured: Parser.boolean(item.Featured)
        };

        if (impactStory.website || impactStory.twitter || impactStory.linkedIn) {
            impactStory.contacts = true;
        }

        if (impactStory.publish) {
            impactStory.thumbnail = 'https://www.fiware.org/wp-content/' + path.join(ASSETS_DIR, impactStory.thumb);
            impactStory.img = 'https://www.fiware.org/wp-content/' + path.join(ASSETS_DIR, impactStory.image);
            impactStory.pdfUrl = 'https://www.fiware.org/wp-content/' + path.join(ASSETS_DIR, impactStory.pdf);
            impactStory.flagUrl = 'https://www.fiware.org/wp-content/' + path.join(FLAGS_DIR, impactStory.flag);

            impactStories.push(impactStory);
        }
        if (impactStory.featured) {
            featuredStory = impactStory;
        }
    });

    if (impactStories.length === 0) {
        console.error('ERROR: No impact stories uploaded.');
        process.exit(1);
    }

    if (!featuredStory) {
        console.error('ERROR: No featuredStory impact story defined.');
        process.exit(1);
    }
    console.log(impactStories.length, ' impact stories generated.');

    return {
        featured: featuredStory,
        stories: impactStories.sort((a, b) => {
            return b.year - a.year;
        })
    };
}

function extractRecent(impactStories) {
    const recent = [...impactStories.slice(0, 7)];
    return recent;
}

function uploadImages(impactStories) {
    return Downloader.checkImages(impactStories, 'img', 'image')
        .then((missingImages) => {
            Downloader.logMissing(missingImages);
            return Downloader.validateUploads(missingImages);
        })
        .then((uploads) => {
            Downloader.uploadImages(uploads, path.join('assets', ASSETS_DIR), IMAGE_SIZE);
            Downloader.logUploads(uploads);
            return uploads;
        });
}

function uploadThumbnails(impactStories) {
    return Downloader.checkImages(impactStories, 'thumbnail', 'thumb')
        .then((missingImages) => {
            Downloader.logMissing(missingImages);
            return Downloader.validateUploads(missingImages);
        })
        .then((uploads) => {
            Downloader.uploadImages(uploads, path.join('assets', ASSETS_DIR), THUMB_SIZE);
            Downloader.logUploads(uploads);
            return uploads;
        });
}

function uploadFlags(impactStories) {
    return Downloader.checkImages(impactStories, 'flagUrl', 'flag')
        .then((missingImages) => {
            Downloader.logMissing(missingImages);
            return Downloader.validateUploads(missingImages);
        })
        .then((uploads) => {
            Downloader.uploadImages(uploads, path.join('assets', FLAGS_DIR), FLAG_SIZE);
            Downloader.logUploads(uploads);
            return uploads;
        });
}

function uploadPDFs(impactStories) {
    return Downloader.checkAssets(impactStories, 'pdfUrl', 'pdf')
        .then((missingAssets) => {
            Downloader.logMissing(missingAssets);
            return Downloader.validateUploads(missingAssets);
        })
        .then((uploads) => {
            Downloader.uploadAssets(uploads, path.join('assets', ASSETS_DIR), THUMB_SIZE);
            Downloader.logUploads(uploads);
            return uploads;
        });
}

function generateHTML(data) {
    const stories = data.stories;
    const recentStories = extractRecent(stories);

    const filterData = {
        years: Sorter.sortData(stories, 'year'),
        domains: Sorter.flatSortData(stories, 'domain'),
        languages: Sorter.sortData(stories, 'language'),
        stories
    };

    Template.write(path.join(IMPACT_STORIES_DIR, 'impact.html'), path.join(TEMPLATE_PATH, 'card.hbs'), stories);
    Template.write(path.join(IMPACT_STORIES_DIR, 'pageData.js'), path.join(TEMPLATE_PATH, 'modal.hbs'), filterData);
    Template.write(path.join(IMPACT_STORIES_DIR, 'filters.html'), path.join(TEMPLATE_PATH, 'filter.hbs'), filterData);
    Template.write(path.join(IMPACT_STORIES_DIR, 'latest.html'), path.join(TEMPLATE_PATH, 'latest.hbs'), data.featured);
    Template.write(path.join(IMPACT_STORIES_DIR, 'recent.html'), path.join(TEMPLATE_PATH, 'recent.hbs'), recentStories);

    Prettier.format(path.join(IMPACT_STORIES_DIR, 'impact.html'), { parser: 'html' });
    Prettier.format(path.join(IMPACT_STORIES_DIR, 'pageData.js'), { parser: 'flow' });
    Prettier.format(path.join(IMPACT_STORIES_DIR, 'filters.html'), { parser: 'html' });
    Prettier.format(path.join(IMPACT_STORIES_DIR, 'latest.html'), { parser: 'html' });
    Prettier.format(path.join(IMPACT_STORIES_DIR, 'recent.html'), { parser: 'html' });
    return stories;
}

/**
 * Read in the impactStories file and output
 * HTML and JavaScript files
 */
function parse(file) {
    return csv()
        .fromFile(file)
        .then((input) => {
            return extractStories(input);
        })
        .then((data) => {
            return generateHTML(data);
        })
        .then((stories) => {
            return uploadThumbnails(stories).then(() => {
                return stories;
            });
        })
        .then((stories) => {
            return uploadImages(stories).then(() => {
                return stories;
            });
        })
        .then((stories) => {
            return uploadFlags(stories).then(() => {
                return stories;
            });
        })
        .then((stories) => {
            return uploadPDFs(stories).then(() => {
                return stories;
            });
        })
        .catch((e) => {
            console.log(e);
        });
}

exports.parse = parse;
exports.file = 'impact-stories.csv';
