var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// how do we require all models at once like we did with index.js and sequelize?
// var db = require('../../server/models');

// passport.use(new LocalStrategy ({
//   usernameField: 'email',
//   passwordField: 'pwd'
// }, function(email, pwd, done) {
//   db.Parent.findOne({
//     where: {
//       email: email
//     }
//   }).then(function(dbUser) {
//     console.log(dbUser);
//     if(!dbUser) {
//       return done(null, false, {
//         message: 'Invalid email'
//       });
//     } else if (!dbUser.validPassword(pwd)) {
//       return done(null, false, {
//         message: 'Incorrect password'
//       });
//     } 
//     return done(null, dbUser);
//   });
// }));