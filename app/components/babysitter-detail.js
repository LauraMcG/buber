import React from 'react';
import AppointmentForm from './appointment-form';

// function handleAppointment(){

// 	event.preventDefault();
// 	console.log('i work!');

// 	return (<AppointmentForm />);


// }

const BabysitterDetail = ({babysitter, appointment, bookedAppointment, handleAppointment}) => {

 //    // conditionally render the popup element based on current state
    // const appointmentForm = (this.state.bookedAppointment ? <AppointmentForm /> : null);

 //    return (
 //      <ul>
      
 //        {appointmentForm} 
 //        <li key={0} onClick={() => event.preventDefault()
 //        	this.handleAppointment()}>Book This Sitter
 //        </li>
      
 //      </ul>
 //    )
  



// this is to check on the status for rendering
	if (!babysitter) {
		return <div>Select a babysitter to view profile.</div>;
	}

	const appointmentForm = (bookedAppointment ? <AppointmentForm 
			babysitter={babysitter}
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



	// // this is to check on the status for rendering
	// if (!props.babysitter) {
	// 	return <div>Select a babysitter to view profile.</div>;
	// }

	// return (
	// 	<div className="details">
	// 		<div>{props.babysitter.bio}</div>
	// 		<div><button 
	// 			className="btn btn-default" 
	// 			onClick={()=>this.props.handleAppointment(babysitter)}
	// 		>Book me!</button></div>
		
	// 	</div>
	// );



// import React from 'react';
// import AppointmentForm from './appointment-form';

// // function handleAppointment(){

// // 	event.preventDefault();
// // 	console.log('i work!');

// // 	return (<AppointmentForm />);


// // }

// const BabysitterDetail = ({babysitter, handleAppointment, appointment}) => {

//  //    // conditionally render the popup element based on current state
//  //    const appointmentForm = (this.state.bookedAppointment ? <AppointmentForm /> : null);

//  //    if (!props.babysitter) {
// 	// 	return <div>Select a babysitter to view profile.</div>;
// 	// }

//  //    return (
//  //      <ul>
      
//  //        {appointmentForm} 
//  //        <li key={0} onClick={() => event.preventDefault()
//  //        	this.handleAppointment()}>Book This Sitter
//  //        </li>
      
//  //      </ul>
//  //    )
  

// // this is to check on the status for rendering
// 	if (!props.babysitter) {
// 		return <div>Select a babysitter to view profile.</div>;
// 	}

// 	return (
// 		<div className="details">
// 			<div>{props.babysitter.bio}</div>
// 			<div><button 
// 				className="btn btn-default" 
// 				onClick={()=>this.props.handleAppointment(babysitter)}
// 			>Book me!</button></div>
		
// 		</div>
// 	);

// };


// export default BabysitterDetail;



// 	// // this is to check on the status for rendering
// 	// if (!props.babysitter) {
// 	// 	return <div>Select a babysitter to view profile.</div>;
// 	// }

// 	// return (
// 	// 	<div className="details">
// 	// 		<div>{props.babysitter.bio}</div>
// 	// 		<div><button 
// 	// 			className="btn btn-default" 
// 	// 			onClick={()=>this.props.handleAppointment(babysitter)}
// 	// 		>Book me!</button></div>
		
// 	// 	</div>
// 	// );