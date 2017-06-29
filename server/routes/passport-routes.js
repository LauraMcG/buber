var passport = require("passport");
var express = require("express");
var router = express.Router();

router.post('/login', passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/'
  }));

module.exports = passport;