require('dotenv').config({ path: '.env' });
const http = require('http');
const app = require('./app');

const port = process.env.PORT || 5000;
const hostName = process.env.HOST_NAME || '127.0.0.1';

const server = http.createServer(app);

server.listen(port, hostName, () => {
	console.log(`Server listening on http://${hostName}:${port}`);
});
