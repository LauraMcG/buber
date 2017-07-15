import React from 'react';

const AppointmentListItem = ({appointment}) => {

	return (
			<li key={appointment._id}>
			{appointment.apptDateTime}
		</li>
	);
};

export default AppointmentListItem;