import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// var Link = require("react-router").Link;

import helpers from '../utils/helpers';
import BabysitterList from '../components/babysitter-list'
import BabysitterDetail from '../components/babysitter-detail'
import AppointmentForm from '../components/appointment-form'

//data

class ParentView extends Component {

	constructor(props) {
		super(props);

		this.state = {
			babysitters: [],
			selectedBabysitter: null,
			appointments: [],
			bookedAppointment: false,
			babysitterID: null,
		};

		this.handleAppointment=this.handleAppointment.bind(this);
	}


	handleAppointment(babysitterID) {

		this.setState ({
			babysitterID: babysitterID,
			bookedAppointment: true
		});
	}


	componentDidMount() {
		helpers.getAllBabysitters().then(function(babysitterData) {
			this.setState({ 
				babysitters: babysitterData.data,
			});
		}.bind(this));

		helpers.getAllAppointments().then(function(appointmentData) {
			this.setState({ 
				appointments: appointmentData.data
			});
			console.log("appointment results: ", appointmentData.data);
		}.bind(this));
	}

	render () {
		return (
			<div>
				<BabysitterDetail 
					babysitter={this.state.selectedBabysitter}
					appointment={this.state.appointments}
					handleAppointment={handleAppointment=>this.state.bookedAppointment}
				/>

				<BabysitterList 
					onBabysitterSelect = {selectedBabysitter => this.setState({selectedBabysitter}) }
					babysitters = {this.state.babysitters} 
				/>

			</div>
		);
	}
}

module.exports = ParentView;