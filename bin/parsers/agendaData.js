function getTrackColor(data) {
    let result = '';

    switch (data) {
        case 0: // Organisation
            result = 'light-grey';
            break;
        case 1: // Grand Opening
            result = 'light-orange';
            break;
        case 2:
            // Research & Development
            // Sustainable Smart City
            // Smart Governance
            // Global FIWARE Use Cases
            // Circular Economy & Urban Development
            result = 'light-blue';
            break;
        case 3:
        case 4:
        case 5:
        case 6:
            // AI & IoT
            // Data Spaces & Interoperability
            // Digital Twins & Data Harmonization
            result = 'light-purple';
            break;
        case 7: //  Tech Training
            result = 'light-green';
            break;
        default:
            break;
    }

    return result;
}

exports.getTrackColor = getTrackColor;
