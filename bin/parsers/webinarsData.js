function getBadge(type) {
    let badge;
    switch (type) {
        case 'Core Context':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/01/svg/core.svg'/>`;
            break;
        case 'Robotics':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/02/svg/robotics.svg'/>`;
            break;
        case 'Security':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/04/svg/security.svg'/>`;
            break;
        case 'Data Monetization':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/04/svg/data-monetization.svg'/>`;
            break;
        case 'IoT Agents':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/02/svg/iot-agents.svg'/>`;
            break;
        case 'Fundamentals':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/01/svg/fundamentals.svg'/>`;
            break;
        case 'Operations':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/operations/svg/operations.svg'/>`;
            break;
        case 'Processing':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/03/svg/processing-analysis.svg'/>`;
            break;
        case 'Visualization':
        case 'Visualisation':
            badge = `<img src='https://www.fiware.org/custom/brand-guide/img/badges/catalogue/03/svg/visualisation.svg'/>`;
            break;
        case 'Cross-Chapter':
        default:
            badge = `<b>${type}</b>`;
            break;
    }

    return badge;
}

function getChapter(type) {
    let chapter;
    switch (type) {
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
        case 'Operations':
            chapter = 'operations';
            break;
        default:
            chapter = 'core';
            break;
    }

    return chapter;
}

exports.getBadge = getBadge;
exports.getChapter = getChapter;
