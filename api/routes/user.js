const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const findUserById = require('../middleware/findUserById');
const User = require('../models/user');

router.get('/current', auth, findUserById, async (req, res, next) => {
	res.status(200).send(req.user);
});

router.patch('/fullname/:id', async (req, res, next) => {
	const { id } = req.params;
	const { firstName, lastName } = req.body;
	const fullName = { firstName, lastName };
	try {
		const user = await User.findByIdAndUpdate(id, { name: fullName }, { new: true });
		console.log(user);
		res.status(200).send({ data: user });
	} catch (error) {
		next(error);
	}
});

exports.router = router;
