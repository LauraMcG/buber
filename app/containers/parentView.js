import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// var Link = require("react-router").Link;

import helpers from '../utils/helpers';


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
				<h1>we did it!!!</h1>
			</div>
		);
	}
}

module.exports = ParentView;