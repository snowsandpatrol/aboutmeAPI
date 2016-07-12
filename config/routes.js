const express = require('express')
const app = express.Router()
const port = process.env.PORT || 4000
const Project = require('./project')

router.route('/')
  //GET summary
  .get(mainController.getMain);

router.route('/education')
  //GET all education
  .get(educationController.getEducation);

  router.route('/links')
    //GET all links
  .get(linksController.getLinks);

router.route('/profile')
  //GET all profile
  .get(profileController.getProfile);

router.route('/project')
  //GET all project
  .get(projectController.getProject);

router.route('/skills')
  //GET all skills
  .get(skillsController.getSkills);

router.route('/work')
  //GET all work
  .get(workController.getWork);

module.exports = router


app.listen(port, () => {
  console.log(`listening to port ${port}`)
})
