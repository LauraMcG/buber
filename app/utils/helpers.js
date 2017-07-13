var axios = require("axios");

var helpers = {
	postUser: function(firstName, lastName, email, password, role) {
    var newUser = { 
    	firstName: firstName,
    	lastName: lastName,
    	email: email,
    	password: password,
    	role: role
    };
    return axios.post("/api/users", newUser)
      .then(function(response) {
        var data = response.data._id;
        return data
      });
    console.log(data);
  }

}

module.exports = helpers;