function getBadge(type, status) {
    if (status === 'Non-Member') {
        return `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/open-source-other/svg/open-source-other.svg'/>`;
    }

    let badge;
    switch (type) {
        case 'API Management':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/04/svg/api-management.svg'/>`;
            break;
        case 'Core Context':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/01/svg/core.svg'/>`;
            break;
        case 'Data Monetization':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/04/svg/data-monetization.svg'/>`;
            break;
        case 'Data Publication':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/04/svg/data-publication.svg'/>`;
            break;
        case 'Robotics':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/02/svg/robotics.svg'/>`;
            break;
        case 'Media Streams':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/02/svg/media-streams.svg'/>`;
            break;
        case 'Security':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/04/svg/security.svg'/>`;
            break;
        case 'IoT Agents':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/02/svg/iot-agents.svg'/>`;
            break;
        case 'Operations':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/operations/svg/operations.svg'/>`;
            break;
        case 'Processing':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/03/svg/processing-analysis.svg'/>`;
            break;
        case 'Third Party':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/02/svg/third-party.svg'/>`;
            break;
        case 'Visualization':
        case 'Visualisation':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/03/svg/visualisation.svg'/>`;
            break;
        default:
            badge = `<b>${type}</b>`;
            break;
    }

    return badge;
}

function getChapter(type) {
    let chapter;
    switch (type) {
        case 'Core Context':
            chapter = 'core';
            break;
        case 'API Management':
        case 'Data Monetization':
        case 'Data Publication':
        case 'Security':
            chapter = 'context-data';
            break;
        case 'Robotics':
        case 'Media Streams':
        case 'Third Party':
        case 'IoT Agents':
            chapter = 'interface';
            break;
        case 'Processing':
        case 'Visualization':
        case 'Visualisation':
            chapter = 'context-processing';
            break;
        default:
            chapter = `<b>${type}</b>`;
            break;
    }

    return chapter;
}

exports.getBadge = getBadge;
exports.getChapter = getChapter;
