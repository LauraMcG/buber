// Dependencies:
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');

//Importing Parent, Babsitter, and Appointment Schema modules
var Parent = require('./models/Parent.js');
var Babysitter = require('./models/Babysitter.js');
var Appointment = require('./models/Appointment.js');

//Express and port set-up
var app = express();
var PORT = process.env.PORT || 8080;

// Body Parser and Logger Config
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// serve static files from public directory
app.use(express.static('./public'));

// Mongoose Setup
mongoose.connect('mongodb://localhost/buber');

var db = mongoose.connection;

  db.on('error', function(err) {
    console.log('mongoose error: ', err);
  });

  db.once('open', function() {
    console.log('mongoose connection successful');
  });

//Server Listener
app.listen(PORT, function() {
  console.log('App listening');
});