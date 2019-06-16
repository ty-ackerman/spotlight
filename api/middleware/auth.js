const jwt = require('../utils/tokenService');

module.exports = async (req, res, next) => {
	const authHeader = req.get('authorization');
	if (!authHeader) {
		next(new Error('unauthorized'));
	}

	const token = authHeader.split(' ')[1];
	try {
		const decoded = await jwt.verify(token);
		req.token = decoded;
		next();
	} catch (error) {
		next(error);
	}
};
