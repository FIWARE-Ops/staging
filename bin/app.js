const Agenda = require('./directories/agenda/parser');
const Careers = require('./directories/careers/parser');
const Cities = require('./directories/cities/parser');
const Domains = require('./directories/domains/parser');
const Enablers = require('./directories/enablers/parser');
const Events = require('./directories/events/parser');
const DirectoryFigures = require('./directories/directory-figures/parser');
const PeopleFigures = require('./directories/people-figures/parser');
const ImpactStories = require('./directories/impact-stories/parser');
const iHubs = require('./directories/ihubs/parser');
const MainFigures = require('./directories/main-figures/parser');
const Marketing = require('./directories/marketing-toolbox/parser');
const OpenCalls = require('./directories/open-calls/parser');
const Organisations = require('./directories/organisations/parser');
const Sponsors = require('./directories/sponsors/parser');
const ResearchDevelopment = require('./directories/research-development/parser');
const Webinars = require('./directories/webinars/parser');
const People = require('./people/parser');
const Marketplace = require('./showcase/parser');

const fs = require('fs-extra');
const Loader = require('./downloader');

const PROCESS = process.env.PROCESS || 'products';
const PAGE = process.env.PAGE || 'fiware';

const PRODUCTS_SUMMARY_FILE = 'products.csv';
const PRODUCT_DETAILS_FILE = 'product-details.csv';

/**
 *  Ensure that a file exists
 */
async function touch(file) {
    await fs.ensureFile(file);
    const now = new Date();
    await fs.utimes(file, now, now);
}

switch (PROCESS) {
    // Create HTML and template files for the FIWARE Marketplace
    case 'products':
        Loader.load('products', PRODUCT_DETAILS_FILE)
            .then(() => {
                return Loader.load('products', PRODUCTS_SUMMARY_FILE);
            })
            .then(() => {
                return Marketplace.parse(PRODUCT_DETAILS_FILE, PRODUCTS_SUMMARY_FILE, PROCESS);
            });
        break;
    // Create HTML and template files for the webinars
    case 'webinars':
        Loader.load('webinars', Webinars.file).then(() => {
            return Webinars.parse(Webinars.file);
        });
        break;
    // Create HTML and template files for the webinars
    case 'agenda':
        Loader.load('agenda', Agenda.file)
            .then(() => {
                return Loader.load(PAGE, People.file);
            })
            .then(() => {
                return Agenda.parse(Agenda.file, People.file);
            });

        break;
    // Create HTML and template files for the webinars
    case 'events':
        Loader.load('events', Events.file)
            .then(() => {
                return Loader.load(PAGE, People.file);
            })
            .then(() => {
                return Events.parse(Events.file, People.file);
            });
        break;
    // Create HTML and template files for the iHubs
    case 'iHubs':
        Loader.load('ihubs', iHubs.file).then(() => {
            return iHubs.parse(iHubs.file);
        });
        break;
    // Create HTML and template files for the organisations
    case 'organisations':
        Loader.load('organisations', Organisations.file).then(() => {
            return Organisations.parse(Organisations.file);
        });
        break;
    // Create HTML and template files for the generic enablers
    case 'enablers':
        Loader.load('enablers', Enablers.file).then(() => {
            return Enablers.parse(Enablers.file);
        });
        break;
    // Create HTML for main figures
    case 'main-figures':
        Loader.load('main-figures', MainFigures.file).then(() => {
            return MainFigures.parse(MainFigures.file);
        });
        break;
    // Create HTML for directory figures
    case 'directory-figures':
        Loader.load('directory-figures', DirectoryFigures.file).then(() => {
            return DirectoryFigures.parse(DirectoryFigures.file);
        });
        break;
    // Create HTML for people figures
    case 'people-figures':
        Loader.load('people-figures', PeopleFigures.file).then(() => {
            return PeopleFigures.parse(PeopleFigures.file);
        });
        break;
    // Create HTML and template files for the impact stories
    case 'impact-stories':
        Loader.load('impact-stories', ImpactStories.file).then(() => {
            return ImpactStories.parse(ImpactStories.file);
        });
        break;
    // Create HTML and template files for research and development
    case 'research-development':
        Loader.load('research-development', ResearchDevelopment.file).then(() => {
            return ResearchDevelopment.parse(ResearchDevelopment.file);
        });
        break;
    // Create HTML and template files for the marketing tool box
    case 'marketing':
        Loader.load('marketing', Marketing.file).then(() => {
            return Marketing.parse(Marketing.file);
        });
        break;
    // Create HTML and template files for the domains
    case 'domains':
        Loader.load('domains', Domains.file).then(() => {
            return Domains.parse(Domains.file);
        });
        break;
    // Create HTML and template files for the open calls
    case 'open-calls':
        Loader.load('open-calls', OpenCalls.file).then(() => {
            return OpenCalls.parse(OpenCalls.file);
        });
        break;
    // Create HTML and template files for careers
    case 'careers':
        Loader.load('careers', Careers.file).then(() => {
            return Careers.parse(Careers.file);
        });
        break;
    // Create HTML and template files for careers
    case 'cities':
        Loader.load('cities', Cities.file).then(() => {
            return Cities.parse(Cities.file);
        });
        break;
    // Create HTML and template files for a listing of people
    case 'people':
        Loader.load(PAGE, People.file).then(() => {
            return People.parse(People.file, PAGE);
        });
        break;
    // Create HTML and template files for the sponsors
    case 'sponsors':
        Loader.load('sponsors', Sponsors.file).then(() => {
            return Sponsors.parse(Sponsors.file);
        });
        break;

    case 'postinstall':
        // Ensure that CSV files are present
        touch(PRODUCT_DETAILS_FILE);
        touch(PRODUCTS_SUMMARY_FILE);
        touch(Domains.file);
        touch(Enablers.file);
        touch(DirectoryFigures.file);
        touch(PeopleFigures.file);
        touch(ImpactStories.file);
        touch(iHubs.file);
        touch(MainFigures.file);
        touch(Marketing.file);
        touch(Organisations.file);
        touch(People.file);
        touch(ResearchDevelopment.file);
        touch(Webinars.file);
        touch(Agenda.file);
        touch(Sponsors.file);
        break;

    default:
        console.log('Unknown');
        break;
}
