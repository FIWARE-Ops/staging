const csv = require('csvtojson');
const path = require('path');

const _ = require('underscore');
const Prettier = require('prettier');
const Parser = require('../../dataParser');
const Sorter = require('../../sort');
const Template = require('../../template');
const TEMPLATE_PATH = 'bin/directories/events/';
const EVENTS_DIR = 'directories/events-directory';
const People = require('../../people/parser');
const CurrentYear = new Date().getFullYear();

const DEFAULT_IMAGE = 'https://www.fiware.org/wp-content/directories/events-directory/images/default.png';

function getExcerpt(item) {
    const text = Parser.textOnly(item.Description);
    const next = text.indexOf('.', 40);
    return text.substring(0, next + 1);
}

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

function formatYearMonth(data) {
    const date = new Date(data);
    return date.toISOString().split('T')[0].replaceAll('-', '').substring(0, 6);
}
function getEventsByMonth(events) {
    const eventsByMonth = {};
    events.forEach((event) => {
        const date = new Date(event.startDate);
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

    for (year = thisYear - 1; year < thisYear + 2; year++) {
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
            img: item.Image ? item.Image : DEFAULT_IMAGE,
            website: item.Website,
            startDate: Parser.date(item['Start Date']),
            endDate: Parser.date(item['End Date']),
            start: item['Start Time'],
            end: item['End Time'],
            eventBrite: item['Eventbrite ID'],
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
                    const eventsByMonth = getEventsByMonth(events);
                    const people = _.uniq(activeSpeakers);
                    const types = _.uniq(
                        _.map(events, (event) => {
                            return event.type;
                        })
                    );
                    const categories = _.uniq(
                        _.flatten(
                            _.map(events, (event) => {
                                return event.category;
                            })
                        )
                    );

                    const featuredEvents = getFeaturedEvents(types, categories, events);

                    const collator = new Intl.Collator('en', { sensitivity: 'base' });
                    const speakerNames = _.map(people, (a) => {
                        return a.name;
                    }).sort((a, b) => {
                        return collator.compare(a.split(' ')[1], b.split(' ')[1]);
                    });

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

                    Template.write(
                        path.join(EVENTS_DIR, '/pageData.js'),
                        path.join(TEMPLATE_PATH, 'modal.hbs'),
                        filterData
                    );

                    Prettier.format(path.join(EVENTS_DIR, 'events.html'), { parser: 'html' });
                    Prettier.format(path.join(EVENTS_DIR, 'pageData.js'), { parser: 'flow' });
                    Prettier.format(path.join(EVENTS_DIR, 'event-details/pageData.js'), { parser: 'flow' });
                })
                .catch((e) => {
                    console.log(e);
                });
        });
}

exports.parse = parse;
exports.file = 'events.csv';
