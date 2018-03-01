const express = require('express');
const request = require('request');
const app = express();

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
	
	const dartApi = 'https://storage.googleapis.com/dart-archive/channels/stable/release/1.24.3/sdk/dartsdk-windows-x64-release.zip';

	try {
		request(dartApi).pipe(res);
	} catch(e) {
		console.log(e);
		res.send(e);
	}

});

app.listen(port, () => {
	console.log('Server is running');
});