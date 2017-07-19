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
		helpers.getAvailableBabysitters().then(function(babysitterData) {
			this.setState({ 
				babysitters: babysitterData.data,
			});
		}.bind(this));

		helpers.getParentAppointments(this.props.userID).then(function(appointmentData) {
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
				

				<div className="row mainRow pink">

					<div className="col-md-12 heroParentContent text-center">

					    <h1>{this.props.firstName}, booking a babysitter is as easy as one, two, three. </h1>

					    <div className="col-md-4">
					      		<h3 className="parentHeroListItem">1. Shop Local</h3> 
					      		<br />
					      		<p>Here is a list of babysitters who are right outside your front door. Click a profile to see more details.
					      		</p>
					    </div>
					      	
					    <div className="col-md-4">
					      		<h3 className="parentHeroListItem">2. Look & Book</h3> 
					      		<br />
					      		<p>When you book a sitter & enter your appointment details the sitter will be notified. You'll receive confirmation when the sitter accepts your request.
					      		</p>
					    </div>
					      	
					    <div className="col-md-4">

					      		<h3>3. Have Fun</h3>
					      		<br/>
					      		<p>Enjoy your time away knowing that  your kids are spending time with a neighborhood babysitter. Remember, it takes a village to babysit a child. 
					      		</p>
					    </div>

					      	  	
					     	

					</div>


				</div> 
				
				<AppointmentList 
					appointments= {this.state.appointments}
					role="parent"
				/>
				
				<BabysitterDetail
					parentID = {this.props.userID}
					firstName={this.props.firstName}
					babysitter={this.state.selectedBabysitter}
					appointment={this.state.appointments}
					showAppointmentForm={this.state.showAppointmentForm}
					handleAppointment={() => this.setState({showAppointmentForm: true, babysitter: this.state.babysitter, appointment:this.state.appointment}) }
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