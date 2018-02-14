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
router.get('/students', (req, res) => {
  console.log('GET Request received for students');
  Student.find((err, students) => {
    if (err)
      res.status(404).send({ error: 'error in mongo of kalpita!' });

    res.json(students);
  });
});

router.post('/students', (req, res) => {
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

      res.json(students);
    });
  });
});

module.exports = router;
