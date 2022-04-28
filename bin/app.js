const fs = require('fs');
const input = JSON.parse(fs.readFileSync('untitled.txt', 'utf8'));
const poweredBy = [];
const ready = [];
const service = [];

input.forEach((item) => {
	const domains = [];
	const tech = [];

	item.Domains.split(',').forEach((item) => {
		if (item.trim() !== ''){
			domains.push(item.trim())
		}
	});
	item.Domains = domains

	item.Technologies.split(',').forEach((item) => {
		if (item.trim() !== ''){
			tech.push(item.trim())
		}
	});
	item.Technologies = tech;


	if (item.Member === 'False'){
		item.Member = false;
	}
	if (item.Member === 'True'){
		item.Member = true;
	}
	if (item.iHub === 'False'){
		item.iHub = false;
	}
	if (item.iHub === 'True'){
		item.iHub = true;
	}

	if (item['Category'] === 'Powered by FIWARE') {
		poweredBy.push(item);
	} else if (item['Category'] === 'FIWARE-Ready') {
		ready.push(item);
	} else if (item['Category'] === 'Services') {
		service.push(item);
	}	else {
		console.log(item['Category'])
	}




});


fs.writeFile('powered.json', JSON.stringify(poweredBy, null, 2), function (err) {
  if (err) return console.log(err);
});

fs.writeFile('ready.json', JSON.stringify(ready, null, 2), function (err) {
  if (err) return console.log(err);
});

fs.writeFile('service.json', JSON.stringify(service, null, 2), function (err) {
  if (err) return console.log(err);
});