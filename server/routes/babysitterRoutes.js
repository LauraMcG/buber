var passport = require("passport");
var express = require("express");
var router = express.Router()

// Route to get all babysitters
router.get("/", function(req, res) {
  Babysitter.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });

});

// Route to add new babysitter to database
router.post("/", function(req, res) {
  var newBabysitter = new Babysitter(req.body);

  console.log(req.body);

  newBabysitter.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// Route to get all saved babysitters
router.get("/:id", function(req, res) {
  var id = req.params.id;

  Babysitter.findOne({'_id': id})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});

// router.put("/:id", function(req, res) {
//   var id = req.params.id;

//   Babysitter.findOneAndUpdate({'_id': id}, req.body)
//     .exec(function(err, doc) {

//       if (err) {
//         console.log(err);
//       }
//       else {
//         res.send(doc);
//       }
//     });
// });



module.exports = router;
