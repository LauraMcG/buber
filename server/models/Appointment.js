//Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppointmentSchema = new Schema ({
	_babysitterID: {
		type: Schema.Types.ObjectId,
		unique: false,
		required: true, 
		ref: 'BabySitter'
	},
	_parentID: {
		type: Schema.Types.ObjectId,
		unique: false,
		required: true, 
		ref: 'Parent'
	},
	apptDateTime: {
		type: Date,
		unique: false,
		required: true
	},
	requestDateTime: {
		type: Date,
		unique: false,
		required: true
	},
	projectedDuration: {
		type: Number,
		unique: false,
		required: true
	},
	sitterAccepted: {
		type: Boolean,
		unique: false,
		required: true
	}
});

var Appointment = mongoose.model('Appointment', AppointmentSchema);
module.exports = Appointment;