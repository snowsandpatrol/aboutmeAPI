
//load in the environment vars
// require('.env').config()
const express = require('express')

var path = require('path')

const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
mongoose.connect('mongodb://hello:hello@ds139675.mlab.com:39675/myapi-app')
const port = process.env.PORT || 4000
// const Project = require('./models/project')
const router = express.Router()
const bodyParser = require('body-parser')
var routes = require('./config/routes')

// MIDDLEWARE
// plugin morgan for debugging information
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Allow cross-domain Ajax requests
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})


app.use(routes)


app.listen(port, () => {
  console.log(`listening to port ${port}`)
})

//its an object because there is a .
//node uses port 3000.

//request and response
//telling the app to lsiten to get request.
//req = response, res = response, next
//
// app.use('/', (req,res,next) => {
//   console.log('hi')
//   next()
// })
//
// app.get('/profile', (req,res) => {
//   const profile = {
//     name: 'Li Min',
//     race: 'Chinese',
//     gender: 'Female'
//   }
//   res.status(200).json(profile)
// })
//
// app.get('/links', (req,res) => {
//   const link = {
//     github: 'https://github.com/snowsandpatrol',
//     linkedin: 'https://sg.linkedin.com/in/lewlimin',
//     email: 'lewlimin@gmail.com'
//   }
//   res.status(200).json(link)
// })
//
// app.get('/skills', (req,res) => {
//   const skills = {
//     Javascript: 3,
//     RubyonRails: 3,
//     HTML: 6,
//     CSS: 6
//   }
//   res.status(200).json(skills)
// })
//
// app.get('/education', (req,res) => {
//   const education = {
//     University: "National University Singapore",
//     Major: "Marketing & Technology",
//     Certifications: "PMP, CBAP, Specialist Diploma in Statistics"
//   }
//   res.status(200).json(education)
// })
//
// app.get('/work', (req,res) => {
//   const work = {
//     Amdocs: "2013 to 2016",
//     Singtel: "2011 to 2013",
//   }
//   res.status(200).json(work)
// })
//
// app.get('/work/1', (req,res) => {
//   const work = {
//     Amdocs: "2013 to 2016",
//     Singtel: "2011 to 2013",
//   }
//   res.status(200).json(work)
// })
//
// app.get('/projects', (req,res) => {
//   const project1 = new Project('aboutme','this is a project about me', 'google.com', 'cat')
//   const project2 = new Project('aboutme','this is a project about x', 'google.com', 'cat')
//   const project3 = new Project('aboutme','this is a project about y', 'google.com', 'cat')
//   const project4 = new Project('aboutme','this is a project about z', 'google.com', 'cat')
//   const project5 = new Project('aboutme','this is a project about o', 'google.com', 'cat')
//   const arrayOfProjects = [project1, project2, project3, project4]
//   res.status(200).json(arrayOfProjects)
// })

// app.get('/hello', (req,res,next) => {
//   res.json({message: 'world'})
// })
//
// app.get('/profile', (req,res) => {
//   res.json({message: 'world'})
// })
