## File System (fs)

The **fs** module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.

- **Synchronous (Blocking) Code Execution**

```javascript
const fs = require('fs');
const port = process.env.PORT || 4000;
const hostName = '127.0.0.1';
const server = require('http').createServer();

server.on('request', (req, res) => {
	const reviews = fs.readFileSync(`${__dirname}/data/reviews.json`, 'utf-8');
	res.end(reviews);
});

server.listen(port, hostName, () => {
	console.log(`Server listening on http://${hostName}:${port}`);
});
```

- **Aynchronous (Non-bloking) Code Execution**

```javascript
const fs = require('fs');
const port = process.env.PORT || 4000;
const hostName = '127.0.0.1';
const server = require('http').createServer();

server.on('request', (req, res) => {
	fs.readFile(`${__dirname}/data/reviews.json`, 'utf-8', (err, data) => {
		if (err) console.log(err);
		res.end(data);
	});
});

server.listen(port, hostName, () => {
	console.log(`Server listening on http://${hostName}:${port}`);
});
```
