const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

router.get('/', async (req, res, next) => {
	try {
		const docs = await User.find();
		res.send({ data: docs }).status(200);
	} catch (error) {
		next(error);
	}
});

router.post('/', async (req, res, next) => {
	const { email, password } = req.body;
	const user = new User({ email, password });
	try {
		const doc = await user.save();
		res.status(200).send({ data: [ doc ] });
	} catch (error) {
		res.status(500).send({ data: error });
		next(error);
	}
});

exports.router = router;
