const fs = require('fs');
const port = process.env.PORT || 4000;
const hostName = '127.0.0.1';
const server = require('http').createServer();

server.on('request', (req, res) => {
	const readable = fs.createReadStream(`${__dirname}/data/reviews.json`);

	readable.on('data', (chunk) => {
		res.write(chunk);
	});
	readable.on('end', () => res.end());

	// HANDLE ERRORS
	readable.on('error', (err) => {
		console.log(err);
		res.statusCode = 500;
		res.end('File not found!');
	});
});

server.listen(port, hostName, () => {
	console.log(`Server listening on http://${hostName}:${port}`);
});
