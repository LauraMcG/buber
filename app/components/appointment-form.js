import React, { Component } from 'react';
import helpers from '../utils/helpers';

class AppointmentForm extends Component {
	constructor(props) {
    super(props);

	    this.state = {
				apptDateTime: '',
				projectedDuration: '',
				sitterAccepted: false,
				appointmentBooked: true
		};

		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
    	

  	}

  	onSubmit(event) {
  		event.preventDefault();
		helpers.postAppointment(
			this.state.apptDateTime, 
			this.state.projectedDuration,
			this.state.sitterAccepted,
			this.state.appointmentBooked
		)
	}

	handleChange(event) {
		var newState = {};
    	newState[event.target.name] = event.target.value;
    	this.setState(newState);
	}
  	

 	render() {
	
	    return (
			<form>
				<div className="form-group">
					<label className="control-label" htmlFor="firstName">Appointment Date</label>
					<input className="form-control" name="apptDateTime" id="apptDateTime" value={this.state.apptDateTime}
						onChange={this.handleChange}
					/>
				</div>

				<div className="form-group">
					<label className="control-label" htmlFor="firstName">Appointment Duration</label>
					<input className="form-control" name="projectedDuration" id="projectedDuration" value={this.state.projectedDuration}
						onChange={this.handleChange}
					/>
				</div>

				<button className="btn btn-primary" type="submit" id="appointment-submit" onClick={this.onSubmit}>Submit</button>
			</form>
		);
  }

	
};

export default AppointmentForm;