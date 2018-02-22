const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// mongo db connection
mongoose.connect(process.env.MONGODB_URI);

// define mongodb model
var Student = mongoose.model('Student', {
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  bio: String,
  year: String,
  school: String,
  major: String,
  canTutor: [String],
  password: String
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

/* POST api listing (probably won't remain through final product) */
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

/* POST api listing for signup form */
router.post('/students/signup', (req, res) => {
  console.log("POST Request received for students/signup");
  Student.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    bio: req.body.bio,
    year: req.body.year,
    school: req.body.school,
    major: req.body.major,
    canTutor: req.body.canTutor,
    password: req.body.password
  }, (err, student) => {
    if (err)
      res.send(err);

    Student.find({email: req.body.email}, (err, student) => {
      if (err)
        res.send(err);

      res.send(student);
    });
  });
});

router.delete('/students', (req, res) => {
  return 0;
})

module.exports = router;
