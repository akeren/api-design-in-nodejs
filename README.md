# What are Streams?

Streams are used to process (**read** and **write**) data piece by piece (**chunks**), without completing the whole read or write operation, and therefore without keeping all the data in memory. e.g **YouTube**, **Netflix**, and et al.

This scientific concept is essential and perfect for handling large volume of data and efficient data processing in terms of **memory** and **time**

- **Memory**
  - No need to keep all the data in memory
- **Time**
  - We dont't have to wait until all the data is available

## Types of Streams in Node.js

1. **Readable streams**
   - These are streams for which we can read (consume) data e.g (http requests and fs read data)
2. **Writable Streams**
   - Streams to which we can write data e.g (http responses and fs write data)
3. **Duplex Streams**
   - These are streams that are both readable and writable e.g (net web socket)
4. **Transform Streams**
   - Duplex streams that transform data as it is written or read e.g (zlip Gzip creation)

```javascript
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
```
