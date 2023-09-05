const csv = require('csvtojson');
const path = require('path');

const Prettier = require('prettier');
const Parser = require('../dataParser');
const Sorter = require('../sort');
const Template = require('../template');
const TEMPLATE_PATH = 'bin/impact-stories/';
const IMPACT_STORIES_DIR = 'directories/impact-stories';

const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/impact-stories/images/impact-story-default.png';


/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of impactStories for later use
 */
function extractStories(input) {
    const impactStories = [];
    let featuredStory = null;

    input.forEach((item) => {
        const impactStory = {
            name: item['Name'],
            year: item['Year'],
            img: item['Featured Image'] ? item['Featured Image'] : DEFAULT_IMAGE,
            thumbnail: item['Thumb'] ? item['Thumb'] : DEFAULT_IMAGE,
            domain: Parser.splitStrings(item['Domain']),
            type: item['Type'],
            medium: item['Medium'],
            pdf: item['PDF'],
            website: item['Website'],
            language: item['Language'],
            flag: item['Country flag'],
            excerpt: item['Excerpt'],
            description: item['Description'],
            publish: Parser.boolean(item['Published']),
            featured: Parser.boolean(item['Featured']),
        };

        if (impactStory.website || impactStory.twitter || impactStory.linkedIn) {
            impactStory.contacts = true;
        }

        if (impactStory.publish) {
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

    return {featured: featuredStory, stories: impactStories.sort((a, b) => {
        return b.year - a.year;
    })};
}

/**
 * Read in the impactStories file and output
 * HTML and JavaScript files
 */
function parse(file) {
    csv()
        .fromFile(file)
        .then((input) => {
            return extractStories(input);
        })
        .then((data) => {
            const stories = data.stories;

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

            Prettier.format(path.join(IMPACT_STORIES_DIR, 'impact.html'), { parser: 'html' });
            Prettier.format(path.join(IMPACT_STORIES_DIR, 'pageData.js'), { parser: 'flow' });
            Prettier.format(path.join(IMPACT_STORIES_DIR, 'filters.html'), { parser: 'html' });
             Prettier.format(path.join(IMPACT_STORIES_DIR, 'latest.html'), { parser: 'html' });
        })
        .catch((e) => {
            console.log(e);
            return;
        });
}

exports.parse = parse;
