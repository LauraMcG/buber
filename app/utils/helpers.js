var axios = require("axios");
var querystring = require("querystring");

var helpers = {
	postUser: function(firstName, lastName, email, password, role) {
    var newUser = { 
      // _id: "596e973c25b7886642f9ec5f",
    	firstName: firstName,
    	lastName: lastName,
    	email: email,
    	password: password,
    	role: role
    };
    return axios.post("/api/users", newUser)
      .then(function(response) {
        console.log(response.data._id);
        return response.data._id;
      });
    
  },
  postParent: function(userID, address, phoneNumber, numChildren, emergencyFirstName, emergencyLastName, emergencyPhoneNumber, doctorLastName, doctorPhoneNumber, wifiPassword){
    var newParent = {
      _userID: userID, 
      address: address, 
      phoneNumber: phoneNumber, 
      numChildren: numChildren, 
      emergencyFirstName: emergencyFirstName, 
      emergencyLastName: emergencyLastName, 
      emergencyPhoneNumber: emergencyPhoneNumber, 
      doctorLastName: doctorLastName, 
      doctorPhoneNumber: doctorPhoneNumber, 
      wifiPassword: wifiPassword
    };
    return axios.post("/api/parents", newParent)
      .then(function(response){
        return response.data;
      });
  },
  postSitter: function(userID, birthdayMonth, birthdayDay, birthdayYear, gender, isAvailable, phoneNumber, bio, certifications, ratePerHour, numFavs){
    var newSitter = {
      _userID: userID,
      birthdayMonth: birthdayMonth,
      birthdayDay: birthdayDay,
      birthdayYear: birthdayYear,
      gender: gender,
      isAvailable: isAvailable, 
      phoneNumber: phoneNumber,
      bio: bio,
      certifications: certifications, 
      ratePerHour: ratePerHour,
      numFavs: numFavs
    };
    return axios.post("/api/babysitters", newSitter)
      .then(function(response){
        return response.data;
      });
  },
  getAllBabysitters: function() {
    return axios.get("/api/babysitters")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
     //Get all appointments 
  getAllAppointments: function() {
    return axios.get("/api/appointments")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  }, 
    //Get all appointments in which a specific babysitter was requested
  getAllSitterAppointments: function() {
    return axios.get("/api/appointments/babysitter/:id")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },

  postAppointment: function(babysitterID, parentID, apptDateTime, projectedDuration, sitterAccepted, appointmentBooked) {
    var newAppt = {
      _parentID: parentID,
      _babysitterID: babysitterID,
      apptDateTime: apptDateTime,
      projectedDuration: projectedDuration,
      sitterAccepted: sitterAccepted,
      appointmentBooked: appointmentBooked
      };
    return axios.post("/api/appointments", newAppt)
      .then(function(response) {
        console.log("axios results", response.data);
        return response.data;
      });
  },
  ///set the babysitter's availability per the toggle request
 putBabysitterAvailability: function (userID, availability) {
    var newAvailability = {
      isAvailable: availability
    };

    var putURL = "/api/babysitters/" + userID;
    console.log(putURL);
    console.log(newAvailability);

    return axios.put(putURL, newAvailability).then(function(response) {
      console.log("putBabysitterAvailability axios results:", response.data);
      return response.data;

    });
  }


};

module.exports = helpers;