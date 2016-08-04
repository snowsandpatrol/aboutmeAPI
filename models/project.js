//standard line
var mongoose = require('mongoose');

var ProjectSchema = mongoose.Schema({
	index: String,
	project_name: String,
	project_description: String,
  project_link: String,
});


const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project
