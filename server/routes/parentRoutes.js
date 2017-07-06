var passport = require("passport");
var express = require("express");
var router = express.Router();

var Parent = require("../models/Parent")

// Route to get all parents
router.get("/parents", function(req, res) {
  Parent.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.json(doc);
      }
  });

});

// Route to get new parent profile page
router.get("/parents/:id", function(req, res) {
  var id = req.params.id;

  Parent.findOne({'_id': id})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.json(doc);
      }
    });
});

// Route to add new parent to database
router.post("/parents", function(req, res) {
  var newParent = new Parent(req.body);
  console.log(newParent);

  newParent.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(doc);
    }
  });
});

// Update Parent in database

router.put("/parents/:id", function(req, res) {
  
      var id = req.params.id;

      Parent.findOneAndUpdate({"_id": id }, {"$set":req.body})
      .exec(function(err, doc){
        if (err) {
          console.log(err)
        }
        else {
          res.json(doc);
        }
      })
  })

// Parent Delete Route
router.delete("/parents/:id", function(req, res) {
  var id = req.params.id;

  Parent.find({'_id': id}).remove().exec( 
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
