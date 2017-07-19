import React from 'react';

const AppointmentListItem = ({appointment}) => {

	return (
			<li key={appointment._id}
				className="col-sm-2 appointmentListItem"
			>
				<div className = "notAccepted"><h2><strong>Pending...</strong></h2></div>
				<p>Day: {appointment.apptDateTime}</p>
				<br/>
				<p>Duration: {appointment.projectedDuration} hours</p>


		</li>
	);
};

export default AppointmentListItem;