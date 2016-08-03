//SINGLE

var Profile = require('../models/profile')

// GET
function getProfile (request, response) {
  Profile.find(function (error, Profile) {
    if (error) response.json({message: 'Could not find any profile'})

    response.json(Profile)
  })
}

module.exports = {
  getProfile: getProfile,
}
