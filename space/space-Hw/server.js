// DEPENDENCIES
const express = require('express');
const app = express();
const missions = require('./models/marsMission');

// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages

// NOTES:
// ejs has not been installed
// views folder has not been created
// views/missions folder has not been created

// PORT
const port = 3000;
let thisActivity = false;


// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
app.get('/', (req, res) => {
  thisActivity = true;
  res.render('index.ejs', {
    missions: missions
  });
});

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission

app.get('/:index', (req, res) => {
    thisActivity = true;
  res.render('show.ejs', {
    mission: missions[req.params.index]
  });
});

// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
  console.log('thisActivity is ' + thisActivity);
})
