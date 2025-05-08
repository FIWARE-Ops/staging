function getTrackColor(data) {
    let result = '';

    switch (data) {
        case 'Tech & Trends':
        case 'Tech Training':
            result = 'light-green';
            break;
        //    result = 'cyan';
        //    break;
        case 'Secure Smart City':
        case 'Sustainable Smart City':
        case 'Global FIWARE Use Cases':
        case 'Research & Development':
        case 'Smart Governance':
        case 'Circular Economy & Urban Development':
            result = 'light-blue';
            break;
        case 'Grand Opening':
            result = 'light-orange';
            break;
        case 'Digital Twins & Data Harmonization':
        case 'AI & IoT':
        case 'Data Spaces & Interoperability':
            result = 'light-purple';
            break;
        case 'Organization':
            result = 'light-grey';
            break;
        default:
            break;
    }

    return result;
}

exports.getTrackColor = getTrackColor;
