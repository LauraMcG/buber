var React = require("react");
var helpers = require("../utils/helpers");
var Link = require("react-router").Link;

var ParentProfile = React.createClass({
	render: function(){
		return (
			<div className="row">
		    <div className="col-md-12">
				      <h2>Parent Profile</h2>
				      <form method="POST" action="/parents">
				      	<div className="form-group">
				          <label className="control-label" htmlFor="address">Address</label>
				          <input className="form-control" name="address" id="address" required/>
				        </div>
				        <div className="form-group">
				          <label className="control-label" htmlFor="phoneNumber">Phone Number</label>
				          <input name="phoneNumber" className="form-control" id="phoneNumber" required/>
				        </div>
				        <div className="form-group">
				          <label htmlFor="numChildren" className="control-label col-sm-2">numChildren</label>
				          <input type="numChildren" className="form-control" name="numChildren" id="numChildren"  required/>
				        </div>
				        <div className="form-group">
				          <label htmlFor="emergencyFirstName" className="control-label col-sm-2">Emergency First Name</label>
				          <input type="emergencyFirstName" className="form-control" name="emergencyFirstName" id="emergencyFirstName"  required/>
				        </div>
				        <div className="form-group">
				          <label htmlFor="emergencyLastName" className="control-label col-sm-2">Emergency Last Name</label>
				          <input type="emergencyLastName" className="form-control" name="emergencyLastName" id="emergencyLastName"  required/>
				        </div>
				        <div className="form-group">
				          <label htmlFor="emergencyPhoneNumber" className="control-label col-sm-2">Emergency Phone Number</label>
				          <input type="emergencyPhoneNumber" className="form-control" name="emergencyPhoneNumber" id="emergencyPhoneNumber"  required/>
				        </div>
				        <div className="form-group">
				          <label htmlFor="doctorLastName" className="control-label col-sm-2">Doctor Last Name</label>
				          <input type="doctorLastName" className="form-control" name="doctorLastName" id="doctorLastName"  required/>
				        </div>
				        <div className="form-group">
				          <label htmlFor="doctorPhoneNumber" className="control-label col-sm-2">Doctor Last Name</label>
				          <input type="doctorPhoneNumber" className="form-control" name="doctorPhoneNumber" id="doctorPhoneNumber"  required/>
				        </div>
				        <div className="form-group">
				          <label htmlFor="wifiPassword" className="control-label col-sm-2">Wifi Password</label>
				          <input type="wifiPassword" className="form-control" name="wifiPassword" id="wifiPassword"  required/>
				        </div>
				        <div className="form-group">
				          <label htmlFor="favSitters" className="control-label col-sm-2">Favorite Sitters</label>
				          <input type="favSitters" className="form-control" name="favSitters" id="favSitters"  required/>
				        </div>
				        <div className="form-group">
				          <button className="btn btn-primary" type="submit" id="parent-submit">Submit</button>
				        </div>
				      </form>
		    </div>
		  </div>
		)
	}
})

var SitterProfile = React.createClass({
	render: function(){
		return (
			<div className="row">
		    <div className="col-md-12">
				      <h2>Parent Profile</h2>
				      <form method="POST" action="/babysitters">
				      	<div className="form-group">
				          <label className="control-label" htmlFor="birthdayMonth">Birthday Month</label>
				          <input className="form-control" name="birthdayMonth" id="birthdayMonth" required/>
				        </div>
				        <div className="form-group">
				          <label className="control-label" htmlFor="birthdayDay">Birthday Day</label>
				          <input name="birthdayDay" className="form-control" id="birthdayDay" required/>
				        </div>
				        <div className="form-group">
				          <label htmlFor="birthdayYear" className="control-label col-sm-2">Birthday Year</label>
				          <input type="birthdayYear" className="form-control" name="birthdayYear" id="birthdayYear"  required/>
				        </div>
				        <div className="form-group">
				          <label htmlFor="gender" className="control-label col-sm-2">Gender</label>
				          <input type="gender" className="form-control" name="gender" id="gender"  required/>
				        </div>
				        <div className="form-group">
				          <label htmlFor="isAvailable" className="control-label col-sm-2">Are you available now?</label>
				          <input type="isAvailable" className="form-control" name="isAvailable" id="isAvailable"  required/>
				        </div>
				        <div className="form-group">
				          <label htmlFor="PhoneNumber" className="control-label col-sm-2">Phone Number</label>
				          <input type="PhoneNumber" className="form-control" name="PhoneNumber" id="PhoneNumber"  required/>
				        </div>
				        <div className="form-group">
				          <label htmlFor="bio" className="control-label col-sm-2">Bio</label>
				          <input type="bio" className="form-control" name="bio" id="bio"  required/>
				        </div>
				        <div className="form-group">
				          <label htmlFor="certifications" className="control-label col-sm-2">Certifications</label>
				          <input type="certifications" className="form-control" name="certifications" id="certifications"  required/>
				        </div>
				        <div className="form-group">
				          <label htmlFor="ratePerHour" className="control-label col-sm-2">Rate Per Hour</label>
				          <input type="ratePerHour" className="form-control" name="ratePerHour" id="ratePerHour"  required/>
				        </div>
				       
				        <div className="form-group">
				          <button className="btn btn-primary" type="submit" id="sitter-submit">Submit</button>
				        </div>
				      </form>
		    </div>
		  </div>
		)
	}
})

var Register = React.createClass({
	getInitialState: function(){
		return {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			role: ''
		};
	},
	onSubmit: function (e, userData){
		e.preventDefault();
		this.setState({role: userData.role});
		console.log(this.state.role);
		helpers.postUser(userData.firstName, userData.lastName, userData.email, userData.password, userData.role).then(function(){
			console.log(this.state.role)
		})
	},
	render: function(){
		if (this.state.role == 1){
			return <ParentProfile/>;
		} else if (this.state.role == 2){
			return <SitterProfile/>;
		} else {
			return (
				<div className="row">
			    <div className="col-md-12">
			  
					      <h2>Register</h2>
					      <form method="POST" action="/users">
					      	<div className="form-group">
					          <label className="control-label" htmlFor="firstName">First Name</label>
					          <input className="form-control" name="firstName" id="firstName" required/>
					        </div>
					        <div className="form-group">
					          <label className="control-label" htmlFor="lastName">Last Name</label>
					          <input name="lastName" className="form-control" id="lastName" required/>
					        </div>
					        <div className="form-group">
					          <label htmlFor="email" className="control-label col-sm-2">Email</label>
					          <input type="email" className="form-control" name="email" id="email"  required/>
					        </div>
					        <div className="form-group">
					          <label htmlFor="password" className="control-label col-sm-2">Password</label>
					          <input className="form-control" name="password" type="password" id="password" pattern="[a-zA-Z0-9]{5,}" title="Password must include at least 5 letters/numbers" required/>
					        </div>
					        <div className="form-group">
					          <label htmlFor="password" className="control-label col-sm-2">Are you registering as a Parent/Guardian or Babysitter?</label>
						        <div className="radio">
										  <label><input type="radio" name="role" value="1"/>Parent/Guardian</label>
										</div>
										<div className="radio">
										  <label><input type="radio" name="role" value="2"/>Babysitter</label>
										</div>
									</div>
					        <div className="form-group">
					          <button className="btn btn-primary" type="submit" id="login-submit" onClick={this.onSubmit}>Submit</button>
					        </div>
					      </form>
					      <p>Current User? <Link to={'/login'}>Login</Link></p>
					   
			    </div>
			  </div>
			)
		}
	}
})

module.exports = Register;

	