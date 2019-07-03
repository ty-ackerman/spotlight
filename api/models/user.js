const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	name: {
		type: Object
	}
});

userSchema.pre('save', async function(next) {
	const user = this;
	// if the user's password has changed since the last time the user was saved, or if this is a completely new user
	if (user.isModified('password') || user.isNew) {
		try {
			const hash = await bcrypt.hash(user.password, 10);
			user.password = hash;
			next();
		} catch (error) {
			next(e);
		}
	} else {
		return next();
	}
});

userSchema.methods.comparePassword = function(password) {
	return bcrypt.compare(password, this.password);
};

module.exports = model('User', userSchema);
