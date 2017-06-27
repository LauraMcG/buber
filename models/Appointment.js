var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AppointmentSchema = new Schema ({
	_babysitterID: {
		type: Schema.Types.ObjectId,
		required: true, 
		ref: 'BabySitter'
	},
	_parentID: {
		type: Schema.Types.ObjectId,
		required: true, 
		ref: 'Parent'
	},
	apptDateTime: {
		type: Date,
		required: true
	},
	requestDateTime: {
		type: Date,
		required: true
	},
	projectedDuration: {
		type: Number,
		required: true
	},
	isAccepted: {
		type: Boolean,
		required: true
	}
});

var Appointment = mongoose.model('Appointment', AppointmentSchema);
module.exports = Appointment;