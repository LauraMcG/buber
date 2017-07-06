//Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ParentSchema = new Schema({
  _parentID: {
    type: Schema.Types.ObjectId,
    required: true, 
    ref: 'User'
  },
  address: {
    type: String,
    unique: false,
    required: true 
  },
  phoneNumber: {
    type: String,
    required: true 
  },
  //Potential   
  numChildren: {
    type: Number,
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
    trim: true,
    unique: false,
    required: true 
  }, 
  emergencyPhoneNumber: {
    type: String,
    required: true 
  },
  doctorLastName: {
    type: String,
    trim: true,
    unique: false,
    required: true 
  },
  doctorPhoneNumber: {
    type: String,
    required: true 
  },
  wifiDomain: {
    type: String,
    required: false 
  },
  wifiPassword: {
    type: String,
    required: false 
  },
  //Potential join table here to store info for fav sitters
  favSitters:{
    type: Number,
    required: true,
    default: 0
  },
});

var Parent = mongoose.model('Parent', ParentSchema);
module.exports = Parent;