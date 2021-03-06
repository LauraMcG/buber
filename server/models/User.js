var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    unique: false,
    // required: true
  },
  lastName: {
    type: String,
    trim: true,
    unique: false,
    // required: true 
  }, 
  email: {
    type: String,
    trim: true
    // unique: false,
    // required: false
  }, 
  password: {
    type: String,
    trim: true,
    unique: false,
    required: true, 
  },
  role: {
  	type: Number,
  	// required: true
  }
});

//BCrypt Password Code

// **
//  * Compare the passed password with the value in the database. A model method.
//  *
//  * @param {string} password
//  * @returns {object} callback
//  */
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};


/**
 * The pre-save hook method.
 */
UserSchema.pre('save', function saveHook(next) {
  var user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { 
      return next(saltError); 
    }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { 
        return next(hashError); 
      }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});


var User = mongoose.model("User", UserSchema);

module.exports = User;