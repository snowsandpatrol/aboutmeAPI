//MULTIPLE

var Project = require('../models/project')

// GET
function getallProject (request, response) {
  Project.find(function (error, Projecthistory) {
    if (error) response.json({message: 'Could not find any Project history'})

    response.send(Projecthistory)
  })
}


// GET SINGLE Project
function getProject (request, response) {
  var index = request.params.index

  Project.findOne({index: index}, function (error, Project) {
    console.log('Project')
    if (error) response.json({message: 'Could not find Project history b/c:' + error})

    response.json({Project: Project})
  })
}

module.exports = {
  getallProject: getallProject,
  getProject: getProject
}
