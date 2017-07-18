//Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ParentSchema = new Schema({
  _userID: {
    type: Schema.Types.ObjectId,
    required: true, 
    ref: 'User'
  },
  address: {
    type: String
    // unique: false,
    // required: true 
  },
  phoneNumber: {
    type: String
    // unique: false,
    // required: true 
  },
  //Potential   
  numChildren: {
    type: Number,
    unique: false,
    required: true
  },
  emergencyFirstName: {
    type: String,
    trim: true,
    unique: false,
    required: true
  },
  emergencyLastName: {
    type: String,
    trim: true
    // unique: false,
    // required: true 
  }, 
  emergencyPhoneNumber: {
    type: String
    // unique: false,
    // required: true 
  },
  doctorLastName: {
    type: String,
    trim: true
    // unique: false,
    // required: true 
  },
  doctorPhoneNumber: {
    type: String,
    unique: false,
    required: true 
  },  
  wifiDomain: {
    type: String,
    unique: false,
    required: false 
  },
  wifiPassword: {
    type: String,
    unique: false,
    required: false 
  },
  //Potential join table here to store info for fav sitters
  favSitters:{
    type: Number,
    unique: false,
    required: false,
    default: 0
  },
});

var Parent = mongoose.model('Parent', ParentSchema);
module.exports = Parent;