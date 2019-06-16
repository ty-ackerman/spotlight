const express = require('express');
const User = require('../models/user');
const tokenService = require('../utils/tokenService');
const router = express.Router();

router.post('/', async (req, res, next) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user) return res.status(404).send({ message: 'user not found' });
		const match = await user.comparePassword(password);
		if (match) {
			const token = tokenService.create(user);
			res.status(200).send({ data: [ token ] });
		} else {
			res.status(401).send({ message: 'unauthorized' });
		}
	} catch (error) {
		next(error);
	}
});

exports.router = router;
