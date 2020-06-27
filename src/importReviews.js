const fs = require('fs');
const port = process.env.PORT || 4000;
const hostName = '127.0.0.1';
const server = require('http').createServer();

server.on('request', (req, res) => {
	/*
	 ** SOLUTION 1: SYNCHRONOUS READING REVIEWS
	 */
	const reviews = fs.readFileSync(`${__dirname}/data/reviews.json`, 'utf-8');
	res.end(reviews);

	// SOLUTION 2: ASNYCHRONOUSLY READING  REVIEWS
	fs.readFile(`${__dirname}/data/reviews.json`, 'utf-8', (err, data) => {
		if (err) console.log(err);
		res.end(data);
	});
});

server.listen(port, hostName, () => {
	console.log(`Server listening on http://${hostName}:${port}`);
});
