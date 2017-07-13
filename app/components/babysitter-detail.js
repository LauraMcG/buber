import React from 'react';

import AppointmentForm from './appointment-form';

function renderForm(event){

	event.preventDefault();
	console.log('i work!');

	return ({AppointmentForm});


}

const BabysitterDetail = (props) => {
	// this is to check on the status for rendering
	if (!props.babysitter) {
		return <div>Select a babysitter to view profile.</div>;
	}

	return (
		<div className="details">
			<div>{props.babysitter.bio}</div>
			<div><button className="btn btn-default btn-primary" onClick={renderForm}>Book me!</button></div>
		</div>
	);
};

export default BabysitterDetail;