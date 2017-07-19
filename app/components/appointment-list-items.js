import React, { Component } from 'react';

function AcceptButton(props){
	return (
    <button onClick={props.onClick}>
      Accept
    </button>
  );
}

function RejectButton(props){
	return (
    <button onClick={props.onClick}>
      Reject
    </button>
  );
}

class AppointmentListItem extends Component {


	handleAcceptance(){
		console.log("accept")
	}

	handleRejection(){
		console.log("reject")
	}

	render(){
		let acceptBttn = null;
		let rejectBttn = null;

		if (this.props.role ==='babysitter'){
			acceptBttn = <AcceptButton onClick={this.handleAcceptance}/> 
			rejectBttn = <RejectButton onClick={this.handleRejection}/>
		} 
		return (
			<li key={this.props.appointment._id}
					className="col-sm-2 appointmentListItem">

					<div className = "notAccepted"><h2><strong>Pending...</strong></h2></div>
					<p>Day: {this.props.appointment.apptDateTime}</p>
					<br/>
					<p>Duration: {this.props.appointment.projectedDuration}</p>

					{acceptBttn}
					{rejectBttn}

			</li>
		);
	}

	
};

export default AppointmentListItem;

