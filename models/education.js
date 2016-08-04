//standard line
var mongoose = require('mongoose');

var EducationSchema = mongoose.Schema({
	index: String,
	institution_name: String,
	start_date: String,
  end_date: String,
  certification: String,
});


const Education = mongoose.model('Education', EducationSchema);
module.exports = Education
