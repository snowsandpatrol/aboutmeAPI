//standard line
var mongoose = require('mongoose');

var WorkSchema = mongoose.Schema({
	employer_name: String,
	start_date: String,
  end_date: String,
});


const Work = mongoose.model('Work', WorkSchema);
module.exports = Work
