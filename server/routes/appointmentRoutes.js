var express = require("express");
var router = express.Router();

var Appointment = require("../models/Appointment")

// Route to get all Appointments
router.get("/appointments", function(req, res) {
  Appointment.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.json(doc);
      }
    });
});

// // // Route to get individual Appointment Information
router.get("/appointments/:id", function(req, res) {
  var id = req.params.id;

  Appointment.findOne({"_id": id})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.json(doc);
      }
    });
});

// // // Route to add new Appointment to database
router.post("/appointments", function(req, res) {
  var newAppointment = new Appointment(req.body);

  newAppointment.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(doc);
    }
  });
});

// // Route to update Appointment in database
router.put("/appointments/:id", function(req, res) {
 
      Appointment.findOneAndUpdate({"_id":req.params.id }, {"$set":req.body})
      .exec(function(err, doc){
        if (err) {
          console.log(err)
        }
        else {
          res.json(doc);
        }
      })
  })

// Appointment Delete Route
router.delete("/appointments/:id", function(req, res) {
  var id = req.params.id;

  Appointment.find({'_id': id}).remove().exec( 
  function (err) {
    if (err) {
      console.log(err)
    }
    else {
      res.send("Deleted");
    }
  });
});

// Route to get all Appointments by _parentID

router.get("/appointments/populate", function(req, res) {
  //query to find all appointments
  Appointment.find({})
    //populate the parents
  .populate("_parentID")
  .exec(function(error, doc){
    if (error){
      res.send(error);
    }
    else {
      res.json(doc);
    }
  });
});

module.exports = router;
