import React from 'react';
import AppointmentForm from './appointment-form';


const BabysitterDetail = ({parentID, babysitter, appointment, showAppointmentForm, handleAppointment, handleAppointmentUpdate}) => {



// this is to check on the status for rendering
	if (!babysitter) {
		return (
			<div className="row sitterDetail">
				<div className="col-md-12">
					<h1>Let's find a babysitter...</h1>
				</div>
			</div>
		);
	}

	const appointmentForm = (showAppointmentForm ? <AppointmentForm
			parentID = {parentID} 
			babysitter={babysitter}
			appointment={appointment}
			handleAppointmentUpdate={handleAppointmentUpdate}
		/> : null);

	return (
	
	<div>
		{appointmentForm}

		<div className="row sitterDetail">
		    <div className="col-md-4 imageBox">
		      <img src={babysitter.photo} alt={babysitter._userID.firstName}/>
		    </div>

		    <div className="col-md-8 col-xs-8">
		      <h1>Meet you new favorite sitter:</h1>
		      <ul className="sitterDetail">
		        <li><h2>Name:</h2><p>{babysitter._userID.firstName} {babysitter._userID.lastName}</p></li>
		        
		        <li><h2>Bio:</h2><p>{babysitter.bio}</p></li>
		        <li><h2>Certifications:</h2>{babysitter.certifications}</li>
		        
		        <li><h2>Favorites:</h2>{babysitter.numFavs}</li>

		      </ul>

		      <button 
		      	type="button" 
		      	className="btn btn-default btn-lg"
		      	onClick={()=> 
					handleAppointment()}
		      	> 

		      	Book Sitter
		      </button>

		     
			</div>

		</div>
	</div>













	);

};


export default BabysitterDetail;
