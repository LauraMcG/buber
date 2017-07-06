var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    unique: false,
    required: true, 
  },
  lastName: {
    type: String,
    trim: true,
    unique: false,
    required: true, 
  }, 
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true, 
  }, 
  password: {
    type: String,
    trim: true,
    unique: false,
    required: true, 
  },
  role: {
  	type: String,
  	required: true
  }
})

var User = mongoose.model("User", UserSchema);

module.exports = User;