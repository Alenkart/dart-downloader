const express = require('express');
const request = require('request');
const uitls = require('./lib');
const path = require('path');
const app = express();

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/:branch/:release/:plataform/:architecture', (req, res) => {

	const url = uitls.buildUrl(req.params);

	request(url).pipe(res).on('error', (e) => {
		res.status(500).send('<h1>Server Error 😞</h1>');
	});

});

app.listen(port, () => {
	console.log('Server is running');
});