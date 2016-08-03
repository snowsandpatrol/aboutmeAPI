var Education = require('../models/education')

// GET
function getallEducation (request, response) {
  Education.find(function (error, Educationhistory) {
    if (error) response.json({message: 'Could not find any Education history'})

    response.json(Educationhistory)
  })
}


// GET SINGLE Education
function getEducation (request, response) {
  var id = request.params.id

  Education.findOne(id, function (error, Education) {
    console.log('Education')
    if (error) response.json({message: 'Could not find Education history b/c:' + error})

    response.json({Education: Education})
  })
}

module.exports = {
  getallEducation: getallEducation,
  getEducation: getEducation,
}
