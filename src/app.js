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

app.get('/api/v1/users', (req, res) => {
	res.status(200).json({
		status: 'success',
		message: 'Get All users'
	});
});

app.get('/api/v1/users/3', (req, res) => {
	res.status(200).json({
		status: 'success',
		message: 'Get a single user'
	});
});

app.post('/api/v1/users', (req, res) => {
	res.status(201).json({
		status: 'success',
		message: 'Create user'
	});
});

app.patch('/api/v1/users/3', (req, res) => {
	res.status(200).json({
		status: 'success',
		message: 'Update a user'
	});
});

app.delete('/api/v1/users/6', (req, res) => {
	res.status(204).json({
		status: 'success',
		message: 'Delete a user'
	});
});

module.exports = app;
