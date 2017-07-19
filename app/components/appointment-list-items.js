import React, { Component } from 'react';
var helpers = require("../utils/helpers");

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
	constructor(props) {
    super(props);
			this.state = {
				sitterAccepted: false
			};
		this.handleAcceptance = this.handleAcceptance.bind(this);
	}

	

	handleAcceptance(){
		this.setState({sitterAccepted: true}, function(){
			helpers.sitterAcceptAppointment(this.props.id, this.state.sitterAccepted).then(
			function(){
				alert ("appointment accepted");
			})
		});
		
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
					<br/>
					{acceptBttn}
					{rejectBttn}

			</li>
		);
	}

	
};

export default AppointmentListItem;

