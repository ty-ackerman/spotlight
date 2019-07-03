const mongoose = require('mongoose');

// Importing all models that will be seeded
const User = require('../models/user');

// Import created seeds
const users = require('./users');

// DB name should match that in contants.js
const uri = 'mongodb://localhost:27017/spotlight';

// Delete existing seeds (truncate)
const truncateDatabaseUser = async () => {
	return Promise.all([ User.deleteMany() ]);
};

// Add seeds
const makeSeeds = async () => {
	// connect to db
	await mongoose.connect(uri);

	// clear dbs
	await truncateDatabaseUser();

	// iterate through array of seeds and save
	await Promise.all(users.map((user) => user.save()));

	// disconnect from db
	mongoose.connection.close();
};

makeSeeds();
