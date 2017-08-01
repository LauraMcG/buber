import React from 'react';
import AppointmentListItems from './appointment-list-items';

const AppointmentList = (props) => {
	console.log(props);
	//if no upcoming appointments are received,
	//display message that reflects this in the component.
	if (props.appointments.length === 0) {
		return (
			<div className="AppointmentList">
				<h3>Upcoming Appointments</h3>
				<p>You have no upcoming appointments. </p>
			</div>
			);
	};

	
	const AppointmentItems = props.appointments.map((appointment) => {
		console.log(props);
		return (
				<AppointmentListItems 
				key={appointment._id}
				id={appointment._id}
				appointment={appointment} 
				role={props.role}
				/>
		);
	});

	return (
		<div>
			<div className="appointmentList row">
				<div className="col-xs-12"/>

					<h1>Pending Appointments</h1>
					<ul className="appointmentListItems">
						{AppointmentItems}
					</ul>
				</div>
		</div>

	);
};

export default AppointmentList;