'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const auth = require('./middleware/auth');
const findUserById = require('./middleware/findUserById');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/healthcheck', require('./routes/index').router);
app.use('/login', require('./routes/login').router);
app.use('/signup', require('./routes/signup').router);
app.use('/user', require('./routes/user').router);

app.get('/users/current', auth, findUserById, async (req, res, next) => {
	res.status(200).send(req.user);
});

app.use((err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		const errors = [ { message: 'unauthorized' } ];

		res.status(401).json({ errors });
	}
});

module.exports = app;
