const sizeOf = require('image-size');
const download = require('image-downloader');

function downloadImages(image) {
  return new Promise((resolve, reject) => {
    const file = image[0].replace(/[ ]/g, '_').replace(/[/&]/g, '');
    const options = {
      url: image[1],
      dest: __dirname + '/../images/' + file,
      extractFilename: false,
      timeout: 10000,
      maxRedirects: 3
    };
    download
      .image(options)
      .then(({ filename }) => {
        try {
          sizeOf(filename, function(err, dimensions) {
            const height = dimensions ? dimensions.height : '???';
            const width = dimensions ? dimensions.width : '???';
            resolve(file + '\t' + height + '\t' + width);
          });
        } catch {
          resolve(file + '\t0\t0');
        }
      })
      .catch(err => {
        console.error(file, err.message);
        //reject(err);
        resolve(file + '\t0\t0');
      });
  });
}

exports.downloadImages = downloadImages;
