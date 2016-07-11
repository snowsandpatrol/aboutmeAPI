const express = require('express')
const app = express()
const port = process.env.PORT || 4000

//its an object because there is a .
//node uses port 3000.
app.listen(port, function(){
  console.log(`listening to port ${port}`)
})
