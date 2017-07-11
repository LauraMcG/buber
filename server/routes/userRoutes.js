var passport = require("passport");
var express = require("express");
var router = express.Router();

var User = require("../models/User")

// Route to get all Users
router.get("/users", function(req, res) {
  User.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.json(doc);
      }
  });

});

// Route to get new User profile page
router.get("/users/:id", function(req, res) {
  var id = req.params.id;

  User.findOne({'_id': id})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.json(doc);
      }
    });
});

// Route to add new User to database
router.post("/users", function(req, res) {
  var newUser = new User(req.body);
  console.log(newUser);

  newUser.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(doc);
    }
  });
});

// Update User in database

router.put("/users/:id", function(req, res) {
  
      var id = req.params.id;

      User.findOneAndUpdate({"_id": id }, {"$set":req.body})
      .exec(function(err, doc){
        if (err) {
          console.log(err)
        }
        else {
          res.json(doc);
        }
      })
  })

// User Delete Route
router.delete("/users/:id", function(req, res) {
  var id = req.params.id;

  User.find({'_id': id}).remove().exec( 
  function (err) {
    if (err) {
      console.log(err)
    }
    else {
      res.send("Deleted");
    }
  });
});

module.exports = router;