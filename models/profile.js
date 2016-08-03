//standard line
var mongoose = require('mongoose');

var ProfileSchema = mongoose.Schema({
	name: String,
	email: String,
});

const Profile = mongoose.model('Profile', ProfileSchema);
module.exports = Profile
