const router = require('express').Router();
let User = require('../models/users.model');

//If user found great, if not ERROR!
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//!!!!----Creates users -----!!!!! */
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new User({username, password});
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    });


module.exports = router;