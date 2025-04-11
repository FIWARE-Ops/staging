function getTrackColor(data) {
    let result = '';

    switch (data) {
        case 'Attraction':
            result = 'light-green';
            break;
        case 'Hotel':
        case 'Restaurant':
            result = 'light-blue';
            break;
        case 'Venue':
            result = 'light-orange';
            break;
        default:
            result = 'light-grey';
            break;
    }

    return result;
}

exports.getTrackColor = getTrackColor;
