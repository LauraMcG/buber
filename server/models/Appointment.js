//Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppointmentSchema = new Schema ({
	_babysitterID: {
		type: Schema.Types.ObjectId,
		unique: false,
		required: false, 
		ref: 'BabySitter'
	},
	_parentID: {
		type: Schema.Types.ObjectId,
		unique: false,
		required: false, 
		ref: 'Parent'
	},
	apptDateTime: {
		type: String,
		unique: false,
		required: false
	},
	requestDateTime: {
		type: String,
		unique: false,
		required: false
	},
	projectedDuration: {
		type: Number,
		unique: false,
		required: false
	},
	sitterAccepted: {
		type: Boolean,
		unique: false,
		required: false
	},
	appointmentBooked: {
		type: Boolean,
		unique: false,
		required: false
	}
});

var Appointment = mongoose.model('Appointment', AppointmentSchema);
module.exports = Appointment;