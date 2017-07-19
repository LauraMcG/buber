import React from 'react';
import AppointmentForm from './appointment-form';


const BabysitterDetail = ({parentID, babysitter, appointment, showAppointmentForm, handleAppointment, handleAppointmentUpdate}) => {


	console.log(babysitter);
// this is to check on the status for rendering
	if (!babysitter) {
		return <div>Select a babysitter to view profile.</div>;
	}

	const appointmentForm = (showAppointmentForm ? <AppointmentForm
			parentID = {parentID} 
			babysitter={babysitter}
			appointment={appointment}
			handleAppointmentUpdate={handleAppointmentUpdate}
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
