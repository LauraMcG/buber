var React = require("react");
var helpers = require("../../utils/helpers");

var ParentView = require("../../containers/parentView");
var BabysitterView = require("../../containers/babysitterView");

var Link = require("react-router").Link;

var SitterProfile = React.createClass({
	getInitialState: function(){
		return {
	    birthdayMonth: '',
	    birthdayDay: '',
	    birthdayYear: '',
	    gender: '',
	    isAvailable: '', 
	    phoneNumber: '',
	    bio: '',
	    certifications: '', 
	    ratePerHour: '',
	    numFavs: '',
		submitted: false
		};
	},

	handleChange: function(event){
		var newState = {};
    	newState[event.target.name] = event.target.value;
    	this.setState(newState);
	},

	onSubmit: function(e){
		e.preventDefault();
		console.log("id before call to database " + this.props.id);
		helpers.postSitter(this.props.id, this.state.birthdayMonth, this.state.birthdayDay, this.state.birthdayYear, this.state.gender, this.state.isAvailable, this.state.phoneNumber, this.state.bio, this.state.certifications, this.state.ratePerHour).then(function(data){
				this.setState({'submitted': true});
		}.bind(this));
	},
	render: function(){
		if (this.state.submitted){
			return (
				<BabysitterView 
					_userID = {this.props.id}
					firstName = {this.props.firstName}
					birthdayMonth = {this.state.birthdayMonth}
				    birthdayDay = {this.state.birthdayDay}
				    birthdayYear = {this.state.birthdayYear}
				    gender = {this.state.gender}
				    isAvailable = {this.state.isAvailable}
				    phoneNumber = {this.state.phoneNumber}
				    bio = {this.state.bio}
				    certifications = {this.state.certifications} 
				    ratePerHour = {this.state.ratePerHour}
				    numFavs = {this.state.numFavs}
				/>
			);
		} 
		return (
			<div className="row">
		    <div className="col-md-12">
		      <h2>Sitter Profile</h2>
		      <form method="POST" action="/api/babysitters">
		      	<div className="form-group">
		          <label className="control-label" htmlFor="birthdayMonth">Birthday Month</label>
		          <input className="form-control" name="birthdayMonth" id="birthdayMonth" value={this.state.birthdayMonth} onChange={this.handleChange} required/>
		        </div>
		        <div className="form-group">
		          <label className="control-label" htmlFor="birthdayDay">Birthday Day</label>
		          <input name="birthdayDay" className="form-control" id="birthdayDay" value={this.state.birthdayDay} onChange={this.handleChange} required/>
		        </div>
		        <div className="form-group">
		          <label htmlFor="birthdayYear" className="control-label col-sm-2">Birthday Year</label>
		          <input type="birthdayYear" className="form-control" name="birthdayYear" id="birthdayYear" value={this.state.birthdayYear} onChange={this.handleChange} required/>
		        </div>
		        <div className="form-group">
		          <label htmlFor="gender" className="control-label col-sm-2">Gender</label>
		          <input type="gender" className="form-control" name="gender" id="gender" value={this.state.gender} onChange={this.handleChange} required/>
		        </div>
		        <div className="form-group">
		          <label htmlFor="isAvailable" className="control-label col-sm-2">Are you available now?</label>
		          <input type="isAvailable" className="form-control" name="isAvailable" id="isAvailable"  value={this.state.isAvailable} onChange={this.handleChange} required/>
		        </div>
		        <div className="form-group">
		          <label htmlFor="PhoneNumber" className="control-label col-sm-2">Phone Number</label>
		          <input type="phoneNumber" className="form-control" name="phoneNumber" id="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} required/>
		        </div>
		        <div className="form-group">
		          <label htmlFor="bio" className="control-label col-sm-2">Bio</label>
		          <input type="bio" className="form-control" name="bio" id="bio"  value={this.state.bio} onChange={this.handleChange} required/>
		        </div>
		        <div className="form-group">
		          <label htmlFor="certifications" className="control-label col-sm-2">Certifications</label>
		          <input type="certifications" className="form-control" name="certifications" id="certifications" value={this.state.certifications} onChange={this.handleChange} required/>
		        </div>
		        <div className="form-group">
		          <label htmlFor="ratePerHour" className="control-label col-sm-2">Rate Per Hour</label>
		          <input type="ratePerHour" className="form-control" name="ratePerHour" id="ratePerHour" value={this.state.ratePerHour} onChange={this.handleChange} required/>
		        </div>
		       
		        <div className="form-group">
		          <button className="btn btn-primary" type="submit" id="sitter-submit" onClick={this.onSubmit}>Submit</button>
		        </div>
		      </form>
		    </div>
		  </div>
		)

	}
})

module.exports = SitterProfile;