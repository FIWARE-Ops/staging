const fs = require('fs');
const input = JSON.parse(fs.readFileSync('untitled.txt', 'utf8'));
const poweredBy = [];
const ready = [];
const service = [];

input.forEach(item => {
  const domains = [];
  const tech = [];

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
  obj.year = item['Certified in'];
  obj.content = item['Excerpt'];

  if (item['Category'] === 'Powered by FIWARE') {
    poweredBy.push(obj);
  } else if (item['Category'] === 'FIWARE-Ready') {
    ready.push(obj);
  } else if (item['Category'] === 'Services') {
    service.push(obj);
  } else {
    console.log(item['Category']);
  }
});

fs.writeFile('powered.json', JSON.stringify(poweredBy, null, 2), function(err) {
  if (err) return console.log(err);
});

fs.writeFile('ready.json', JSON.stringify(ready, null, 2), function(err) {
  if (err) return console.log(err);
});

fs.writeFile('service.json', JSON.stringify(service, null, 2), function(err) {
  if (err) return console.log(err);
});
