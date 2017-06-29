var passport = require("passport");
var express = require("express");
var router = express.Router()

// Route to get all parents
router.get("/", function(req, res) {


});

// Route to add new parent to database
router.post("/", function(req, res) {
  var newParent = new Parent(req.body);

  console.log(req.body);

  newParent.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// Route to get new parent profile page
router.get("/:id", function(req, res) {

  Parent.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});



module.exports = router;
