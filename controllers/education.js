var Candy = require('../models/Candy')

// GET
function getAll (request, response) {
  Candy.find(function (error, candies) {
    if (error) response.json({message: 'Could not find any candy'})

    response.send(candies)
  })
}
