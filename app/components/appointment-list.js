//this component lists all of the appointments for the user 
//at the time of this writing, this component is designed with the parent view in mind. 
//in a perfect world, we'll be able to use this for both a parent or a babysitter.

import React from 'react';
import AppointmentListItems from './appointment-list-items';

const AppointmentList = (props) => {

	
	console.log("props: " + props);

	//if no upcoming appointments are received,
	//display message that reflects this in the component.

	//vv this isn't working yet.
	// if (props.length == undefined ) {
	// 	return (
	// 		<div className="AppointmentList">
	// 			<h3>Upcoming Appointments</h3>
	// 			<p>You have no upcoming appointments. </p>
	// 		</div>
	// 		);
	// };


	const AppointmentItems = props.appointments.map((appointment) => {
		return (
				<AppointmentListItems 
				key={appointment._id}
				appointment={appointment} 
				/>
		);
	});

	return (
		<div className="AppointmentList">
		<h3>Upcoming Appointments</h3>
		<ul className="col-md-4 list-group">
			{AppointmentItems}
		</ul>
		</div>
	);
};

export default AppointmentList;