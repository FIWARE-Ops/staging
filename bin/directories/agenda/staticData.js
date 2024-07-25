
function getTrackColor(data) {
    let result = '';

    switch (data) {
        case 'Tech & Trends':
            result = 'light-green';
            break;
        case 'Co-creation of tech solutions':
            result = 'light-green';
            break;
        case 'Tech Training':
            result = 'cyan';
            break;
        case 'Innovation with FIWARE':
            result = 'light-yellow';
            break;
        case 'Grand Opening':
            result = 'light-blue';
            break;
        case 'Hands-On Use Cases':
            result = 'light-blue';
            break;
        case 'Collaborative business strategies':
            result = 'light-blue';
            break;
        default:
            break;
    }

    return result;
}

exports.getTrackColor = getTrackColor;