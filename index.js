'use strict';

const server = require('./api/server');
const { PORT, DB_URI } = require('./api/utils/constants');
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/spotlight';

server.listen(PORT, async () => {
	await mongoose.connect(uri);
	console.log(`App listening on port ${PORT}`);
});
