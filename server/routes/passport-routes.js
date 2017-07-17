var passport = require("passport");
var express = require("express");
var router = express.Router();

//Component Dependencies


router.post('/login', passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/'
  }));

module.exports = passport;