function getBadge(type) {
    let badge;
    switch (type) {
        case 'Core Context':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>`;
            break;
        case 'Robotics':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Robotics.svg'/>`;
            break;
        case 'Security':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Security.svg'/>`;
            break;
        case 'Data Monetization':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_DataMonetization.svg'/>`;
            break;
        case 'IoT Agents':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_IOTAgents.svg'/>`;
            break;
        case 'Fundamentals':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Fundamentals.svg'/>`;
            break;
        case 'Operations':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Operations.svg'/>`;
            break;
        case 'Processing':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_ProcessingAnalysis.svg'/>`;
            break;
        case 'Visualization':
        case 'Visualisation':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Visualization.svg'/>`;
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
