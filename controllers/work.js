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
  var index = request.params.index

  Work.findOne({index: index}, function (error, work) {
    console.log('Work')
    if (error) response.json({message: 'Could not find Work history b/c:' + error})

    response.json({work: work})
  })
}

module.exports = {
  getallWork: getallWork,
  getWork: getWork,
}
