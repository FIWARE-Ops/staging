const csv = require('csvtojson');
const path = require('path');

const _ = require('underscore');
const Prettier = require('prettier');
const Parser = require('../dataParser');
const Template = require('../template');
const TEMPLATE_PATH = 'bin/templates/events/';
const EVENTS_DIR = 'directories/events-directory';
const Downloader = require('../downloader');
const People = require('./people');
const ASSETS_DIR = 'directories/events-directory/images';
const FLAGS_DIR = 'directories/people/images/flag';

const IMAGE_SIZE = { height: 628, width: 1200 };
const FLAG_SIZE = { height: 120, width: 120 };
const DEFAULT_IMAGE = 'events-default.png';

function getFeaturedEvents(types, categories, events) {
    const now = new Date();
    const splitEvents = _.partition(events, (event) => {
        return event.startDate > now;
    });
    const promotedEvents = splitEvents[0].concat(splitEvents[1].reverse());
    let featuredEvents = [];
    categories.forEach((category) => {
        featuredEvents = featuredEvents.concat(
            _.filter(promotedEvents, (event) => {
                return event.category.includes(category);
            }).slice(0, 4)
        );
    });
    featuredEvents = _.uniq(featuredEvents);

    featuredEvents.sort((a, b) => {
        return b.startDate.getTime() - a.startDate.getTime();
    });
    return featuredEvents;
}

function getEventsByMonth(events) {
    const eventsByMonth = {};
    events.forEach((event) => {
        const date = new Date(event.startTime);
        const yearMonth = date.toISOString().split('T')[0].replaceAll('-', '').substring(0, 6);

        if (!eventsByMonth[yearMonth]) {
            eventsByMonth[yearMonth] = {
                text: `${date.toLocaleString('en-GB', { month: 'long', year: 'numeric' })}`,
                events: []
            };
        }
        event.yearMonth = yearMonth;
        eventsByMonth[yearMonth].events.push(event);
    });
    return eventsByMonth;
}

function getSixMonths() {
    const months = {};
    const thisYear = new Date().getFullYear();

    for (let year = thisYear - 1; year < thisYear + 2; year++) {
        for (let month = 0; month < 12; month++) {
            const date = new Date(year, month, 1);
            const date2 = new Date(date);
            date2.setMonth(date.getMonth() + 1);
            const yearMonth = date2.toISOString().split('T')[0].replaceAll('-', '').substring(0, 6);

            months[yearMonth] = {
                text: `${date.toLocaleString('en-GB', { month: 'long', year: 'numeric' })}`
            };
        }
    }

    return months;
}

function uploadImages(events) {
    return Downloader.checkImages(events)
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

function uploadFlags(events) {
    return Downloader.checkImages(events, 'flagUrl', 'flag')
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

function validateEvents(events) {
    console.log(`Checking ${events.length} events`);
    for (const event of events) {
        if (!event.online) {
            if (event.venueName === '') {
                console.log(`DATA MISMATCH: Missing Venue: ${event.title}`);
            }
            if (event.venueAddress === '') {
                console.log(`DATA MISMATCH: Missing Address: ${event.title}`);
            }
            if (event.venueLink === '') {
                console.log(`DATA MISMATCH: Missing Venue Link: ${event.title}`);
            }
            if (event.city === '') {
                console.log(`DATA MISMATCH: Missing City: ${event.title}`);
            }
            if (event.country === '') {
                console.log(`DATA MISMATCH: Missing Country: ${event.title}`);
            }
            if (event.flag === '') {
                console.log(`DATA MISMATCH: Missing Flag: ${event.title}`);
            }
            if (event.latitude === '') {
                console.log(`DATA MISMATCH: Missing Latitude: ${event.title}`);
            }
            if (event.longitude === '') {
                console.log(`DATA MISMATCH: Missing Longitude: ${event.title}`);
            }
        }
    }
}

/**
 * Take the human readable column names from the spreadsheet and create a
 * data object of each project for later use
 */
function extractAgenda(input, speakers, activeSpeakers, eventDates) {
    const events = [];
    input.forEach((item) => {
        const event = {
            title: item.Title,
            excerpt: item.Excerpt,
            description: Parser.markdown(item.Description),
            type: item.Type,
            category: Parser.splitStrings(item.Category),
            image: item.Image ? item.Image : DEFAULT_IMAGE,
            website: item.Website,
            startDate: Parser.date(item['Start Date']),
            endDate: Parser.date(item['End Date']),
            start: item['Start Time'],
            end: item['End Time'],
            eventBrite: item['Eventbrite ID'],
            multiDay: Parser.boolean(item['Multi Day Event']),
            timeZone: item['Time Zone'],
            location: item.Location,
            online: Parser.boolean(item.Online),
            onlineLink: item['Online Link'],
            recording: item.Recording,
            speakers: Parser.splitStrings(item.Speakers),
            venueName: item['Venue Name'],
            venueAddress: item['Venue Address'],
            venueLink: item['Venue Website'],
            city: item.City,
            country: item.Country,
            flag: item['Country Flag'],
            latitude: item.Latitude,
            longitude: item.Longitude,
            publish: Parser.boolean(item.Published)
        };

        if (event.publish) {
            event.speakers = _.uniq(
                _.filter(event.speakers, function (name) {
                    return name !== '';
                })
            );

            event.speakers = _.map(event.speakers, function (name) {
                const speaker = _.findWhere(speakers, { name });

                if (speaker) {
                    speaker.shortJob = speaker.filters[0];
                } else {
                    console.error(`DATA MISMATCH: Missing Speaker: ${name}`);
                }

                return speaker ? speaker : { name };
            });

            event.speakers.forEach((speaker) => {
                activeSpeakers.push(speaker);
            });

            event.startTime = Parser.addTime(event.startDate, event.start);
            event.shortDateStart = event.startTime.toLocaleDateString('en-GB', { month: 'long', day: 'numeric' });
            event.endTime = Parser.addTime(event.endDate ? event.endDate : event.startDate, event.end);
            event.shortDateEnd = event.endTime.toLocaleDateString('en-GB', { month: 'long', day: 'numeric' });
            eventDates.push(event.shortDateEnd);
            event.img = 'https://www.fiware.org/wp-content/' + path.join(ASSETS_DIR, event.image);
            event.flagUrl = 'https://www.fiware.org/wp-content/' + path.join(FLAGS_DIR, event.flag);
            events.push(event);
        }
    });
    if (events.length === 0) {
        console.error('ERROR: No events uploaded.');
        process.exit(1);
    }
    console.log(events.length, ' events items generated.');
    console.log(activeSpeakers.length, ' events speakers found.');

    events.sort((a, b) => {
        if (b.startDate.getTime() !== a.startDate.getTime()) {
            return a.startDate.getTime() - b.startDate.getTime();
        }
        if (b.startTime.getTime() !== a.startTime.getTime()) {
            return a.startTime.getTime() - b.startTime.getTime();
        }
        return 0;
    });

    return events;
}

function generateHTML(events, activeSpeakers) {
    const eventsByMonth = getEventsByMonth(events);
    const people = _.uniq(activeSpeakers);
    const types = _.uniq(
        _.map(events, (event) => {
            return event.type;
        })
    ).sort();
    const categories = _.uniq(
        _.flatten(
            _.map(events, (event) => {
                return event.category;
            })
        )
    ).sort();

    const featuredEvents = getFeaturedEvents(types, categories, events);
    const filterData = {
        people,
        events
    };

    Template.clean(path.join(EVENTS_DIR));

    Template.write(path.join(EVENTS_DIR, 'events.html'), path.join(TEMPLATE_PATH, 'card.hbs'), {
        months: eventsByMonth
    });

    Template.write(path.join(EVENTS_DIR, 'filters.html'), path.join(TEMPLATE_PATH, 'filter.hbs'), {
        months: getSixMonths(eventsByMonth),
        types,
        categories
    });

    Template.write(
        path.join(EVENTS_DIR, 'event-details/pageData.js'),
        path.join(TEMPLATE_PATH, 'details.hbs'),
        filterData
    );
    Template.write(
        path.join(EVENTS_DIR, 'event-details/featured.html'),
        path.join(TEMPLATE_PATH, 'recent.hbs'),
        featuredEvents
    );

    Template.write(path.join(EVENTS_DIR, '/pageData.js'), path.join(TEMPLATE_PATH, 'modal.hbs'), filterData);

    events.forEach((event) => {
        const filename = Template.createClass(event.title);
        Template.write(
            path.join(EVENTS_DIR, `social-media/${filename}.html`),
            path.join(TEMPLATE_PATH, 'social-media.hbs'),
            event
        );
    });

    Prettier.format(path.join(EVENTS_DIR, 'events.html'), { parser: 'html' });
    Prettier.format(path.join(EVENTS_DIR, 'pageData.js'), { parser: 'flow' });
    Prettier.format(path.join(EVENTS_DIR, 'event-details/pageData.js'), { parser: 'flow' });
    return events;
}

/**
 * Read in the careers file and output
 * HTML and JavaScript files
 */
function parse(eventsFile, speakersFile) {
    const activeSpeakers = [];
    const eventDates = [];

    csv()
        .fromFile(speakersFile)
        .then((input) => {
            const allSpeakers = People.extract(input, true);
            csv()
                .fromFile(eventsFile)
                .then((input) => {
                    return extractAgenda(input, allSpeakers, activeSpeakers, eventDates);
                })
                .then((events) => {
                    return generateHTML(events, activeSpeakers);
                })
                .then((events) => {
                    validateEvents(events);
                    return events;
                })
                .then((events) => {
                    Downloader.emptyAssets();
                    return uploadImages(events).then(() => {
                        return events;
                    });
                })
                .then((events) => {
                    return uploadFlags(events).then(() => {
                        return events;
                    });
                })
                .catch((e) => {
                    console.log(e);
                });
        });
}

exports.parse = parse;
exports.file = 'events.csv';
