const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const findUserById = require('../middleware/findUserById');

router.get('/current', auth, findUserById, async (req, res, next) => {
	res.status(200).send(req.user);
});

exports.router = router;
