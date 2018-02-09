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

router.post('/api/students', (req, res) => {
  Student.create({
    name: req.body.name,
    year: req.body.year,
    done: false
  }, (err, student) => {
    if (err)
      res.send(err);

    Student.find((err, students) => {
      if (err)
        res.send(err);

      res.json(Students);
    });
  });
});

module.exports = router;
