//standard line
var mongoose = require('mongoose');

var LinksSchema = mongoose.Schema({
	github: String,
	linkedin: String,
});

const Links = mongoose.model('Links', LinksSchema);
module.exports = Links
