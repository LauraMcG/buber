import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// var Link = require("react-router").Link;

import helpers from '../utils/helpers';
import BabysitterList from '../components/babysitter-list'
import BabysitterDetail from '../components/babysitter-detail'
import AppointmentForm from '../components/appointment-form'
import AppointmentList from '../components/appointment-list'

import SearchBar from './search-bar'

//data

class ParentView extends Component {

	constructor(props) {
		super(props);

		this.state = {
			babysitters: [],
			selectedBabysitter: null,
			appointments: [],
			showAppointmentForm: false,
			babysitterID: null,
		};
		// this.handleAppointment=this.handleAppointment.bind(this);
		this.handleAppointmentUpdate = this.handleAppointmentUpdate.bind(this)
	}

	// //callback for search
	// babysitterSearch(term){
	// 	this.setState({
	// 		babysitters:babysitters,
	// 		selectedBabysitter:babysitters[0]
	// 	});
	// }


	handleAppointmentUpdate(appointment) {
		console.log("handleAppointmentUpdate", appointment)
		const newAppointments = this.state.appointments.concat([appointment]);
		this.setState ({
			appointments: newAppointments,
			showAppointmentForm: false,
			selectedBabysitter: null
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

	// <SearchBar onSearchTermChange = {babysitterSearch } />

	render () {
		return (
			<div>
				<h1>Welcome {this.props.firstName}</h1>
				<AppointmentList 
					appointments= {this.state.appointments}
				/>
				
				<BabysitterDetail 
					firstName={this.props.firstName}
					babysitter={this.state.selectedBabysitter}
					appointment={this.state.appointments}
					showAppointmentForm={this.state.showAppointmentForm}
					handleAppointment={() => this.setState({showAppointmentForm:true, babysitter: this.state.babysitter, appointment:this.state.appointment}) }
					handleAppointmentUpdate={this.handleAppointmentUpdate}
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