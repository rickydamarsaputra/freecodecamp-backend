require('dotenv').config();
var express = require('express');
var app = express();

console.log(process.env.MESSAGE_STYLE);

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.sendFile(`${__dirname}/views/index.html`);
});

app.get('/json', function (req, res) {
	if (process.env.MESSAGE_STYLE === 'uppercase') {
		res.json({ message: 'HELLO JSON' });
	} else {
		res.json({ message: 'Hello json' });
	}
});

module.exports = app;
