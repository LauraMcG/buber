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
			selectedBabysitter: null
		};
	}

	componentDidMount() {
		helpers.getAllBabysitters().then(function(babysitterData) {
			this.setState({ babysitters: babysitterData.data});
			console.log("babysitter results: ", babysitterData.data);
		}.bind(this));
	}

	render () {
		return (
			<div>
				<BabysitterDetail babysitter={this.state.selectedBabysitter} 
				/>

				<BabysitterList 
					onBabysitterSelect = {selectedBabysitter => this.setState({selectedBabysitter}) }
					babysitters = {this.state.babysitters} />
			</div>
		);
	}
}

module.exports = ParentView;