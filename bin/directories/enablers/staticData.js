function getBadge(type, status) {
    if (status === 'Non-Member') {
        return `<img src='https://www.fiware.org/style/imgs/Badges/Badge_OpenSource_Other.svg'/>`;
    }

    let badge;
    switch (type) {
        case 'API Management':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_APIManagement.svg'/>`;
            break;
        case 'Core Context':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg'/>`;
            break;
        case 'Data Monetization':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_DataMonetization.svg'/>`;
            break;
        case 'Data Publication':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_DataPublication.svg'/>`;
            break;
        case 'Robotics':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Robotics.svg'/>`;
            break;
        case 'Media Streams':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_MediaStreams.svg'/>`;
            break;
        case 'Security':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Security.svg'/>`;
            break;
        case 'IoT Agents':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_IOTAgents.svg'/>`;
            break;
        case 'Operations':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Operations.svg'/>`;
            break;
        case 'Processing':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_ProcessingAnalysis.svg'/>`;
            break;
        case 'Third Party':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_ThirdParty.svg'/>`;
            break;
        case 'Visualization':
        case 'Visualisation':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Visualization.svg'/>`;
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
