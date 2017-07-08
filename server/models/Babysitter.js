//Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BabysitterSchema = new Schema({
  _babysitterID: {
    type: Schema.Types.ObjectId,
    required: true, 
    ref: 'User'
  },
  birthdayMonth: { 
    type: Date, 
    unique: false,
    required: true 
  },
  birthdayDay: { 
    type: Date, 
    unique: false,
    required: true 
  },
  birthdayYear: { 
    type: Date, 
    unique: false,
    required: true 
  },
  //Gender is a categorized variable with numerical data
  gender: {
    type: Number,
    unique: false,
    required: true 
  },
  isAvailable: {
    type: Boolean,
    unique: false,
    required: true 
  },
  phoneNumber: {
    type: String,
    unique: false,
    required: true 
  },
  bio: {
    type: String,
    unique: false,
    required: false
  },
  certifications: {
    type: String,
    unique: false,
    required: false
  },
  ratePerHour: {
    type: Number,
    unique: false,
    required: true
  },
  //Potential join table for storing the info for families that favorite the babysitters
  numFavs: {
    type: Number,
    unique: false,
    required: true,
    default: 0
  }    
});

var BabySitter = mongoose.model('BabySitter', BabysitterSchema);
module.exports = BabySitter;