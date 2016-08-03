const express = require('express')
const app = express()
const router = express.Router()
const port = process.env.PORT || 4000

const educationController = require('../controllers/education');
const linksController = require('../controllers/links');
const profileController = require('../controllers/profile');
const projectController = require('../controllers/projects');
const skillsController = require('../controllers/skills');
const workController = require('../controllers/work');
// const index = require('../public/index');

app.set('views', __dirname + '/public');

// router.route('/')
//   //GET all education
//   .get(function(req, res) {
//     res.render(index.html);
//   });

//EDUCATION
router.route('/education')
  //GET all education
  .get(educationController.getallEducation);

  router.route('/education/:id')
  //GET single education
  .get(educationController.getEducation);


//LINKS
  router.route('/links')
    //GET all links
  .get(linksController.getLinks);

//PROFILE
router.route('/profile')
  //GET all profile
  .get(profileController.getProfile);

//PROJECT
router.route('/project')
  //GET all project
  .get(projectController.getallProject);

router.route('/project/:id')
//GET single project
  .get(projectController.getProject);

//SKILLS

router.route('/skills')
  //GET all skills
  .get(skillsController.getSkills);

//WORK

router.route('/work')
  //GET all work
  .get(workController.getallWork);

router.route('/work/:id')
//GET single work
  .get(workController.getWork);

module.exports = router
