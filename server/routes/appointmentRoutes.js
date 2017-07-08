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

// Route to get all of the populated appointments 
router.get("/appointments/pop", function(req, res) {
  //query to find all appointments
  Appointment.find({})
    .populate("_parentID", "firstName")
    .populate("_babysitterID")
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.json(doc);
      }
    });
});

// // Route to get all of the appointments for an individual parent
// router.get("/appointments/parent/:id", function(req, res) {
//   //query to find all appointments
//   Appointment.find({"_parentID" : req.params.id })
//     .populate("_parentID", "firstName")
//     .populate("_babysitterID")
//     .exec(function(err, doc) {

//       if (err) {
//         console.log(err);
//       }
//       else {
//         res.json(doc);
//       }
//     });
// });

// // Route to get all of the appointments for an individual babysitter
// router.get("/appointments/babysitter/:id", function(req, res) {
//   //query to find all appointments with the babysitter id in the params
//   Appointment.find({"_babysitterID" : req.params.id })
//     .populate("_parentID", "firstName")
//     .populate("_babysitterID")
//     .exec(function(err, doc) {

//       if (err) {
//         console.log(err);
//       }
//       else {
//         res.json(doc);
//       }
//     });
// });


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

module.exports = router;