//SINGLE

var Links = require('../models/links')

// GET
function getLinks (request, response) {
  Links.find(function (error, Links) {
    if (error) response.json({message: 'Could not find any links'})

   response.json(Links)

  })
}

module.exports = {
  getLinks: getLinks,
}
