function getBadge(type) {
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

exports.getBadge = getBadge;
