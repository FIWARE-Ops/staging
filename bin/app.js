const fs = require('fs');
const csvFilePath = 'untitled.txt';
const csv = require('csvtojson');
const poweredBy = [];
const ready = [];
const service = [];
const cities = [];

csv()
  .fromFile(csvFilePath)
  .then(input => {
    input.forEach(item => {
      const domains = [];
      const tech = [];

      const searchMask = 'fiware';
      const regEx = new RegExp(searchMask, 'ig');
      const replaceMask = 'FIWARE';

      if (item.Status !== 'Deleted') {
        item.Domains.split(',').forEach(item => {
          if (item.trim() !== '') {
            domains.push(item.trim());
          }
        });
        item.Domains = domains;

        item.Technologies.split(',').forEach(item => {
          if (item.trim() !== '') {
            tech.push(item.trim());
          }
        });
        item.Technologies = tech;

        if (item.Member === 'False') {
          item.Member = false;
        }
        if (item.Member === 'True') {
          item.Member = true;
        }
        if (item.iHub === 'False') {
          item.iHub = false;
        }
        if (item.iHub === 'True') {
          item.iHub = true;
        }

        const obj = {};
        obj.company = item['Organisation Name'];
        obj.name = item['Product Name'];
        obj.img = item['Logo'];
        obj.fiwareMember = item.Member;
        obj.fiwareIhub = item.iHub;
        obj.companyLink = item['Product Website'];
        obj.domain = item['Domains'];
        obj.type = item['Type of Product'];
        obj.technology = item['Technologies'];
        obj.year = parseInt(item['Certified in']);
        obj.content = item['Excerpt'].replace(regEx, replaceMask).trim();

        if (item['Category'] === 'Powered by FIWARE') {
          poweredBy.push(obj);
        } else if (item['Category'] === 'NGSI Ready Devices') {
          ready.push(obj);
        } else if (item['Category'] === 'FIWARE-Ready') {
          ready.push(obj);
        } else if (item['Category'] === 'Services') {
          service.push(obj);
        } else if (item['Category'] === 'Support Services') {
          service.push(obj);
        } else if (item['Category'] === 'Cities4Cities') {
          cities.push(obj);
        } else {
          console.log(item['Category']);
        }
      }
    });

    // Products

    fs.writeFile(
      'poweredbyFiware/pageData.js',
      'var pageData = ' + JSON.stringify(poweredBy, null, 2) + ';',
      function(err) {
        if (err) return console.log(err);
      }
    );

    // Devices
    fs.writeFile(
      'fiwareready/pageData.js',
      'var pageData = ' + JSON.stringify(ready, null, 2) + ';',
      function(err) {
        if (err) return console.log(err);
      }
    );

    // Services

    fs.writeFile(
      'services/pageData.js',
      'var pageData = ' + JSON.stringify(service, null, 2) + ';',
      function(err) {
        if (err) return console.log(err);
      }
    );

    // Cities

    fs.writeFile(
      'cities4cities/pageData.js',
      'var pageData = ' + JSON.stringify(cities, null, 2) + ';',
      function(err) {
        if (err) return console.log(err);
      }
    );
  });
