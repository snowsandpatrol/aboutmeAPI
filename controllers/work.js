var Work = require('../models/work')

// GET
function getallWork (request, response) {
  Work.find(function (error, workhistory) {
    if (error) response.json({message: 'Could not find any work history'})

    response.send(workhistory)
  })
}


// GET SINGLE WORK
function getWork (request, response) {
  var id = request.params.id

  Work.findOne(id, function (error, work) {
    console.log('work')
    if (error) response.json({message: 'Could not find work history b/c:' + error})

    response.json({work: work})
  })
}

module.exports = {
  getallWork: getallWork,
  getWork: getWork,
}
