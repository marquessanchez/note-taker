const express = require('express');
const app = express();
const { notes } = require('./api/notes');
const PORT = process.env.PORT || 3001;

// I'm creating the route for nontes file
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

// I'm creating the route for index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});



// Listening for get/post requests on PORT 3001
app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});