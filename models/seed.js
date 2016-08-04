const seeder = require("mongoose-seed")
// Connect to MongoDB via Mongoose
seeder.connect('mongodb://hello:hello@ds139675.mlab.com:39675/myapi-app', function() {

// Load Mongoose models
seeder.loadModels([
    'models/education.js',
    'models/project.js',
    'models/work.js',
    'models/profile.js',
    'models/links.js',
    'models/skills.js',
]);

// Clear specified collections
   seeder.clearModels(['Education'], function() {
// , 'project', 'work'

       // Callback to populate DB once collections have been cleared
       seeder.populateModels(data, function(){

       });

   });
});

// Data array containing seed data - documents organized by Model
var data = [
   {
       'model': 'Education',
       'documents': [
           {
               'institution_name': 'Doc1',
               'start_date': 200,
               'end_date': 200,
               'certification': 'Bachelors',
           },

             {
               'institution_name': 'Doc2',
               'start_date': 300,
               'end_date': 300,
               'certification': 'Bachelors 2',
           }
       ]
   },

   {
       'model': 'Project',
       'documents': [
           {
              'index': '1',
               'project_name': 'Proj1',
               'project_description': '200',
               'project_link': '200',
           },

             {
               'index': '2',
               'project_name': 'Proj2',
               'project_description': '300',
               'project_link': '300',
           }
       ]
   },

   {
       'model': 'Work',
       'documents': [
           {
               'employer_name': 'Employer1',
               'start_date': '200',
               'end_date': '200',
           },

             {
               'employer_name': 'Employer2',
               'start_date': '200',
               'end_date': '200',
           }
       ]
   },

   {
       'model': 'Profile',
       'documents': [
           {
             'name': 'Li Min',
             'email': 'lewlimin@gmail.com',
           }
       ]
   },

      {
          'model': 'Links',
          'documents': [
              {
                'github': 'https://github.com/snowsandpatrol',
                'linkedin': 'https://sg.linkedin.com/in/lewlimin',
              }
          ]
      },

      {
          'model': 'Skills',
          'documents': [
              {
                'language': 'HTML',
                'score': '8',
              },
              {
                'language': 'Javascript',
                'score': '5',
            },
          ]
      },

];
