var jwt = require('jsonwebtoken');
var User = require('../models/User.js');
var PassportLocalStrategy = require('passport-local').Strategy;
var config = require('./config.json');

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true

}, (req, email, password, done) => {
  var userData = {
    email: email.trim(),
    password: password.trim(),
    firstName: req.body.firstName.trim(),
    lastName: req.body.lastName.trim(),
    role: req.body.role
  };

  var newUser = new User(userData);
  newUser.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});