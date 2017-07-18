
var express = require("express");
var router = express.Router();

var Babysitter = require("../models/Babysitter");


// Route to get all babysitters
router.get("/babysitters", function(req, res) {

  Babysitter.find({})
    .populate("_userID")
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.json(doc);
      }
  });

});

// Route to get one babysitter
router.get("/babysitters/:id", function(req, res) {
  var id = req.params.id;

  Babysitter.findOne({'_id': id})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.json(doc);
      }
    });
});

// Route to add new babysitter to database
router.post("/babysitters", function(req, res) {
  console.log('BODY IS', req.body);
  var newBabysitter = new Babysitter(req.body);

  newBabysitter.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(doc);
    }
  });
});

// Update Babysitter in database

router.put("/babysitters/:id", function(req, res) {
  
      var id = req.params.id;

      Babysitter.findOneAndUpdate({"_id": id }, {"$set":req.body})
      .exec(function(err, doc){
        if (err) {
          console.log(err)
        }
        else {
          res.json(doc);
        }
      })
  })

// Babysitter Delete Route
router.delete("/babysitters/:id", function(req, res) {
  var id = req.params.id;

  Babysitter.find({'_id': id}).remove().exec( 
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
