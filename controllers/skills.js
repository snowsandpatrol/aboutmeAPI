//SINGLE

var Skills = require('../models/skills')

// GET
function getSkills (request, response) {
  Skills.find(function (error, Skills) {
    if (error) response.json({message: 'Could not find any skills'})

   response.json(Skills)

  })
}

module.exports = {
  getSkills: getSkills,
}
