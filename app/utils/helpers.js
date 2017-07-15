var axios = require("axios");

var helpers = {
	postUser: function(firstName, lastName, email, password, role) {
    var newUser = { 
    	firstName: firstName,
    	lastName: lastName,
    	email: email,
    	password: password,
    	role: role};
    return axios.post("User", newUser)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  },

  getAllBabysitters: function() {
    return axios.get("/api/babysitters")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },

  getAllAppointments: function() {
    return axios.get("/api/appointments")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },

  postAppointment: function(apptDateTime, projectedDuration, sitterAccepted, appointmentBooked) {
    var newAppt = { 
      apptDateTime: apptDateTime,
      projectedDuration: projectedDuration,
      sitterAccepted: sitterAccepted,
      appointmentBooked: appointmentBooked
      };
    return axios.post("/api/appointments", newAppt)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  }
}

module.exports = helpers;