const express = require('express');
const router = express.Router();
const jwt = require('../utils/tokenService');
const User = require('../models/user');
const auth = require('../middleware/auth');
const findUserById = require('../middleware/findUserById');

router.get('/me', auth, findUserById, async (req, res, next) => {
	res.status(200).send(req.user);
});

exports.router = router;
