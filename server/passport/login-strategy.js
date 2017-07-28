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
    password: password.trim()
  };

  // find a user by email address
  return User.findOne({ email: userData.email }, (err, user) => {
    if (err) { 
      return done(err); 
    }

    if (!user) {
      var error = new Error('Incorrect email or password');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }

    // check if a hashed user's password is equal to a value saved in the database
    return user.comparePassword(userData.password, (passwordErr, isMatch) => {
      if (err) { 
        return done(err); 
      }

      if (!isMatch) {
        var error = new Error('Incorrect email or password');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }

      var payload = {
        sub: user._id,
        name: user.username
      };

      // create a token string
      var token = jwt.sign(payload, config.jwtSecret);
      var data = {
        name: user.username
      };

      return done(null, token, data);
    });
  });
});