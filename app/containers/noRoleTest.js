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

class noRoleTest extends Component {

// <SearchBar onSearchTermChange = {babysitterSearch } />

	render () {
		return (
			<div>
				<h1>Welcome - You are Authenticated!</h1>

			</div>
		);
	}
}

module.exports = noRoleTest;