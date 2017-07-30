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
	    photo: '',
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
		helpers.postSitter(this.props.id, this.state.birthdayMonth, this.state.birthdayDay, this.state.birthdayYear, this.state.gender, this.state.isAvailable, this.state.phoneNumber, this.state.bio, this.state.certifications, this.state.ratePerHour, this.state.photo).then(function(data){
				this.setState({'submitted': true});
		}.bind(this));
	},
	render: function(){
		if (this.state.submitted){
			return (
				<BabysitterView 
					userID = {this.props.id}
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
				    photo = {this.state.photo}
				/>
			);
		} 
		return (
			<div className="row">
		    <div className="col-md-12">
		    	<div className="sitterRegisterHero">
		      		<h3>Thank you for registering as a Babysitter.</h3>
		      	</div>
		      <form method="POST" action="/api/babysitters">
		      	<div className="form-group">

		          <label className="control-label" htmlFor="birthdayMonth">Birthday Month</label>
		          <select className="form-control" name="birthdayMonth" id="birthdayMonth" value={this.state.birthdayMonth} onChange={this.handleChange} required>
		           <option value="" disabled selected>Select your birth month...</option>
		            <option value="January">January</option>
		            <option value="February">February</option>
		            <option value="March">March</option>
		            <option value="April">April</option>
		            <option value="May">May</option>
		            <option value="June">June</option>
		            <option value="July">July</option>
		            <option value="August">August</option>
		            <option value="September">September</option>
		            <option value="October">October</option>
		            <option value="November">November</option>
		            <option value="December">December</option>
		          </select>
		        </div>
		        <div className="form-group">
		          <label className="control-label" htmlFor="birthdayDay">Birthday Day</label>
		          <input type="number" className="form-control" name="birthdayDay" id="birthdayDay" value={this.state.birthdayDay} onChange={this.handleChange} required/>
		        </div>
		        <div className="form-group">
		          <label htmlFor="birthdayYear" className="control-label col-sm-2">Birthday Year</label>
		          <input type="number" className="form-control" name="birthdayYear" id="birthdayYear" value={this.state.birthdayYear} onChange={this.handleChange} required/>
		        </div>

		        <div className="form-group">
		          <label htmlFor="gender" className="control-label col-sm-2">Gender</label>
		          <select type="gender" className="form-control" name="gender" id="gender" value={this.state.gender} onChange={this.handleChange} required>  
		            <option value="" disabled selected>Select one...</option>
		            <option value="Female">Female</option>
		            <option value="Male">Male</option>
		            <option value="Trans">Trans*</option>
		          </select>
		        </div>

		        <div className="form-group">
		          <label htmlFor="isAvailable" className="control-label col-sm-2">Are you available now?</label>
		          <select type="isAvailable" className="form-control" name="isAvailable" id="isAvailable"  value={this.state.isAvailable} onChange={this.handleChange} required>
		            <option value="" disabled selected>Select one...</option>
		            <option value="true">Yes</option>
		            <option value="false">No</option>
		          </select>
		        </div>
		        <div className="form-group">
		          <label htmlFor="PhoneNumber" className="control-label col-sm-2">Phone Number</label>
		          <input type="tel" className="form-control" name="phoneNumber" id="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} required/>
		        </div>
		        <div className="form-group">
		          <label htmlFor="bio" className="control-label col-sm-2">Bio</label>
		          <input type="text" className="form-control" name="bio" id="bio"  value={this.state.bio} onChange={this.handleChange} required/>
		        </div>
		        <div className="form-group">
		          <label htmlFor="certifications" className="control-label col-sm-2">Certifications</label>
		          <input type="text" className="form-control" name="certifications" id="certifications" value={this.state.certifications} onChange={this.handleChange} required/>
		        </div>
		        <div className="form-group">
		          <label htmlFor="ratePerHour" className="control-label col-sm-2">Rate Per Hour</label>
		          <input type="number" className="form-control" name="ratePerHour" id="ratePerHour" value={this.state.ratePerHour} onChange={this.handleChange} required/>
		        </div>
		        <div className="form-group">
		          <label htmlFor="photo" className="control-label col-sm-2">Photo</label>
		          <input type="url" className="form-control" name="photo" id="photo" value={this.state.photo} onChange={this.handleChange} required/>
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