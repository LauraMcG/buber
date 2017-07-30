var axios = require("axios");
var querystring = require("querystring");

var helpers = {
	postUser: function(firstName, lastName, email, password, role) {
    var newUser = { 
      //_id: "596a6563ed68ca50a286166a",
    	firstName: firstName,
    	lastName: lastName,
    	email: email,
    	password: password,
    	role: role
    };
    console.log("going to helpers");
    return axios.post("/auth/register", newUser)
      .then(function(response) {
        console.log(response.data._id);
        return response.data._id;
      });
    
  },
  checkUser: function(email, password) {
    var newUser = { 
      email: email,
      password: password,
    };
    console.log("Login information is reaching the helpers!");
    console.log(newUser);
    return axios.post("/auth/login", newUser)
      .then(function(response) {
        console.log(response.data._id);
        console.log(response.data.email);
        console.log(response.data.role);
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
  postSitter: function(userID, birthdayMonth, birthdayDay, birthdayYear, gender, isAvailable, phoneNumber, bio, certifications, ratePerHour, photo, numFavs){
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
      numFavs: numFavs,
      photo: photo
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
  
  //retrieve the data for babysitters with isAvailable set as true
  getAvailableBabysitters: function() {
    return axios.get("/api/babysitters/available")
    .then(function(results) {
      console.log("getAvailableBabysitters ran ok");
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
  getAllSitterAppointments: function(babysitterID) {
    var URL = "/api/appointments/babysitters/" + babysitterID;
    return axios.get(URL)
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },

  getAllParentAppointments: function(parentID) {
    var URL = "/api/appointments/parents" + parentID;
    return axios.get(URL)
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },

  postAppointment: function(parentID, babysitterID, apptDateTime, projectedDuration, sitterAccepted, appointmentBooked) {
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
  sitterAcceptAppointment: function(apptID, sitterAccepted){
    var updateAppt = {
      _id: apptID,
      sitterAccepted: sitterAccepted
    };
    var url = "/api/appointments/" + apptID;
    return axios.put(url, updateAppt)
    .then(function(results) {
      console.log("axios results", results);
      console.log(updateAppt);
        return results;
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