function getTrackColor(data) {
    let result = '';

    switch (data) {
        case 'Tech & Trends':
        case 'Smart Governance for Smart Cities':
            result = 'light-green';
            break;
        case 'Tech Training':
            result = 'cyan';
            break;
        case 'Secure Smart City':
            result = 'light-yellow';
            break;
        case 'Grand Opening':
        case 'Organisation':
        case 'Organization':
            result = 'light-orange';
            break;
        case 'AI & Data-Driven Urban Management':
        case 'Collaborative business strategies':
            result = 'light-blue';
            break;
        default:
            break;
    }

    return result;
}

exports.getTrackColor = getTrackColor;
