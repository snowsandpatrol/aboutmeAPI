const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const Project = require('./project')
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

app.get('/projects', (req,res) => {
  const project1 = new Project('aboutme','this is a project about me', 'google.com', 'cat')
  const project2 = new Project('aboutme','this is a project about x', 'google.com', 'cat')
  const project3 = new Project('aboutme','this is a project about y', 'google.com', 'cat')
  const project4 = new Project('aboutme','this is a project about z', 'google.com', 'cat')
  const project5 = new Project('aboutme','this is a project about o', 'google.com', 'cat')
  const arrayOfProjects = [project1, project2, project3, project4]
  res.status(200).json(arrayOfProjects)
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
