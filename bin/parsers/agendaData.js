function getTrackColor(data) {
    let result = '';

    switch (data) {
        case 'Tech & Trends':
            result = 'light-green';
            break;
        case 'Tech Training':
            result = 'cyan';
            break;
        case 'Secure Smart City':
        case 'Sustainable Smart City':
        case 'Smart Gov for Smart Cities':
            result = 'light-blue';
            break;
        case 'Grand Opening':
        case 'Organization':
            result = 'light-orange';
            break;
        case 'AI & Data-Driven Urban Mngmt':
            result = 'light-purple';
            break;
        default:
            break;
    }

    return result;
}

exports.getTrackColor = getTrackColor;
