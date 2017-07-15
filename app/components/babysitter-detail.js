import React from 'react';
import AppointmentForm from './appointment-form';


const BabysitterDetail = ({babysitter, appointment, showAppointmentForm, handleAppointment}) => {



// this is to check on the status for rendering
	if (!babysitter) {
		return <div>Select a babysitter to view profile.</div>;
	}

	const appointmentForm = (showAppointmentForm ? <AppointmentForm 
			babysitter={babysitter}
			appointment={appointment}
		/> : null);

	return (
		
		<div className="details">
		{appointmentForm}
			
			<div>{babysitter.bio}</div>
			<div><button 
				className="btn btn-default" 
				onClick={()=> 
					handleAppointment()}
			>Book me!</button></div>
		
		</div>
	);

};


export default BabysitterDetail;
