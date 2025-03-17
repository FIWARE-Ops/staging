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
            result = 'light-blue';
            break;
        case 'Grand Opening':
            result = 'light-orange';
            break;
        case 'AI & Data-Driven Urban Mngmt':
        case 'Smart Governance & Digital PA':
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
