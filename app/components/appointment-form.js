import React, { Component } from 'react';

class AppointmentForm extends Component {
	constructor(props) {
    super(props);
  }
  render() {
    const { babysitter } = this.props;
    console.log({babysitter})
    return (
      	<h1>babysitter appointment form</h1>
    )
  }
	

	
	// return (
	// 		<form onSubmit={props.handleAppointment}>
	// 			<div className="form-group">
	// 				<h4 className="">Time of appointment</h4>
	// 				<input type="text"
	// 				value={props.state.time}
	// 					className="form-control"
	// 					id="time"
	// 					onChange={props.handleChange}
	// 					required
	// 				/>

	// 			</div>

	// 			<div className="pull-right">
	// 				<button type="submit"
	// 				className="btn btn-danger"
	// 				onSubmit={() => handleAppointment(babysitter)}
	// 				>

	// 					<h4>Submit</h4>
	// 				</button>
	// 			</div>
	// 		</form>
	// );
};

export default AppointmentForm;