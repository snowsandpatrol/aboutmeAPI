//standard line
var mongoose = require('mongoose');

var SkillsSchema = mongoose.Schema({
	language: String,
	score: String,
});

const Skills = mongoose.model('Skills', SkillsSchema);
module.exports = Skills
