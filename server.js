// Dependencies:
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');

var Parent = require("./server/models/Parent");
var Babysitter = require("./server/models/Babysitter");
var Appointment = require("./server/models/Appointment");

var passport = require('./app/config/passport.js');

//Express and port set-up
var app = express();
var PORT = process.env.PORT || 8080;

// set up express to use passport
// app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
// app.use(passport.session());

// Body Parser and Logger Config
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// serve static files from public directory
app.use(express.static('./public'));

//Passport middleware
var authCheckMiddleware = require('./server/passport/auth-passport.js');
app.use('/api', authCheckMiddleware);

// adding parentRoute
const parentRoutes = require("./server/routes/parentRoutes");
app.use("/", parentRoutes);

// adding sitterRoute
const babysitterRoutes = require("./server/routes/babysitterRoutes");
app.use("/", babysitterRoutes);

// adding sitterRoute
const appointmentRoutes = require("./server/routes/appointmentRoutes");
app.use("/", appointmentRoutes);

// Mongoose Setup
mongoose.connect('mongodb://localhost/buber');

var db = mongoose.connection;

  db.on('error', function(err) {
    console.log('mongoose error: ', err);
  });

  db.once('openUri', function() {
    console.log('mongoose connection successful');
  });

//Server Listener
app.listen(PORT, function() {
  console.log('App listening on ' + PORT);
});