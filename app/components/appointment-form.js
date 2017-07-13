import React from 'react';

const AppointmentForm = (props) => {
	
	
	return (
			<form onSubmit={props.handleSubmit}>
				<div className="form-group">
					<h4 className="">Time of appointment</h4>
					<input type="text"
						value={props.state.time}
						className="form-control"
						id="time"
						onChange={props.handleChange}
						required
					/>

				</div>

				<div className="pull-right">
					<button type="submit"
					className="btn btn-danger">
						<h4>Submit</h4>
					</button>
				</div>
			</form>
	);
};

export default AppointmentForm;