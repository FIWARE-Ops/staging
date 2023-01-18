function getBadge(type) {
    let badge;
    switch (type) {
        case 'Core Context':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Core.svg' style='height:24px;margin-right:10px'/>`;
            break;
        case 'Robotics':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Robotics.svg' style='height:24px;margin-right:10px'/>`;
            break;
        case 'Security':
            badge = `<img src='https://www.fiware.org/style/imgs/Badges/Badge_FIWARE_Security.svg' style='height:24px;margin-right:10px'/>`;
            break;
        case 'Cross-Chapter':
        case 'Data Monetization':
        case 'Fundamentals':
        case 'IoT Agents':
        case 'Operations':
        case 'Processing':
        case 'Visualisation':
        default:
            badge = type;
            break;
    }

    return badge;
}

exports.getBadge = getBadge;
