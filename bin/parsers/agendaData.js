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
        case 'Smart Governance':
        case 'Sustainable Smart City':
            result = 'light-blue';
            break;
        case 'Grand Opening':
            result = 'light-orange';
            break;
        case 'AI & IoT':
        case 'Circular Economy & Urban Development':
        case 'Digital Twins & Data Harmonization':
        case 'Research & Development':
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
