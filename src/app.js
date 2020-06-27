const express = require('express');
const morgan = require('morgan');

const app = express();

// ONLY LOG REQUESTS IN DEVELOPMENT MODE
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.get('/', (req, res) => {
	res.status(200).json({
		status: 'success',
		message: 'Hello, from the server-side!'
	});
});

module.exports = app;
