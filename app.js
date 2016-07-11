const express = require('express')
const app = express()
const port = process.env.PORT || 4000
//its an object because there is a .
//node uses port 3000.

//request and response
//telling the app to lsiten to get request.
//req = response, res = response, next

app.use('/', (req,res,next) => {
  console.log('hi')
  next()
})

app.get('/profile', (req,res) => {
  const name = {
    name: 'Li Min',
    age: 31,
    pet: 'nil',
    gender: 'male'
  }
  res.status(200).json(name)
})

app.get('/hello', (req,res,next) => {
  res.json({message: 'world'})
})

app.get('/profile', (req,res) => {
  res.json({message: 'world'})
})




app.listen(port, () => {
  console.log(`listening to port ${port}`)
})
