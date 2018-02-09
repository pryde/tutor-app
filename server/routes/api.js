const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// mongo db connection
mongoose.connect('mongodb://localhost/tutor-app');

// define mongodb model
var Student = mongoose.model('Student', {
       name: String,
       year: String
});

/* GET api listing. */
router.get('/api/students', (req, res) => {
  Student.find((err, students) => {
    if (err)
      res.send(err);

    res.json(students);
  });
});

module.exports = router;
