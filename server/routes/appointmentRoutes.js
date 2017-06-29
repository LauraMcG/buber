var passport = require("passport");
var express = require("express");
var router = express.Router()

// Route to get all Appointments
router.get("/", function(req, res) {


});

// Route to get Appointment Information
router.get("/:id", function(req, res) {

  Appointment.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});

// Route to add new Appointment to database
router.post("/create", function(req, res) {
  var newAppointment = new Appointment(req.body);

  console.log(req.body);

  newAppointment.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});



module.exports = router;
