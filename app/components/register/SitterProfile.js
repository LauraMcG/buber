var React = require("react");
var helpers = require("../../utils/helpers");
var BabysitterView = require("../../containers/babysitterView");
var Link = require("react-router").Link;

var SitterProfile = React.createClass({
	getinitialState: function(){
		submitted: false
	},
	onSubmit: function(){
		e.preventDefault();
		helpers.postParent(this.props.id, this.state.birthdayMonth, this.state.birthdayDay, this.state.birthdayYear, this.state.gender, this.state.isAvailable, this.state.PhoneNumber, this.state.bio, this.state.certifications, this.state.ratePerHour).then(function(data){
				this.setState({'submitted': true});
		}.bind(this));
	},
	render: function(){
		if (this.state.submitted){
			return (
				<BabySitterView 
					_babysitterID ={this.props.id}
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
		} else {
			return (
				<div className="row">
			    <div className="col-md-12">
			      <h2>Sitter Profile</h2>
			      <form method="POST" action="/babysitters">
			      	<div className="form-group">
			          <label className="control-label" htmlFor="birthdayMonth">Birthday Month</label>
			          <input className="form-control" name="birthdayMonth" id="birthdayMonth" value={this.state.birthdayMonth}required/>
			        </div>
			        <div className="form-group">
			          <label className="control-label" htmlFor="birthdayDay">Birthday Day</label>
			          <input name="birthdayDay" className="form-control" id="birthdayDay" value={this.state.birthdayDay} required/>
			        </div>
			        <div className="form-group">
			          <label htmlFor="birthdayYear" className="control-label col-sm-2">Birthday Year</label>
			          <input type="birthdayYear" className="form-control" name="birthdayYear" id="birthdayYear" value={this.state.birthdayYear} required/>
			        </div>
			        <div className="form-group">
			          <label htmlFor="gender" className="control-label col-sm-2">Gender</label>
			          <input type="gender" className="form-control" name="gender" id="gender" value={this.state.gender} required/>
			        </div>
			        <div className="form-group">
			          <label htmlFor="isAvailable" className="control-label col-sm-2">Are you available now?</label>
			          <input type="isAvailable" className="form-control" name="isAvailable" id="isAvailable"  value={this.state.isAvailable} required/>
			        </div>
			        <div className="form-group">
			          <label htmlFor="PhoneNumber" className="control-label col-sm-2">Phone Number</label>
			          <input type="phoneNumber" className="form-control" name="phoneNumber" id="phoneNumber" value={this.state.phoneNumber} required/>
			        </div>
			        <div className="form-group">
			          <label htmlFor="bio" className="control-label col-sm-2">Bio</label>
			          <input type="bio" className="form-control" name="bio" id="bio"  value={this.state.bio} required/>
			        </div>
			        <div className="form-group">
			          <label htmlFor="certifications" className="control-label col-sm-2">Certifications</label>
			          <input type="certifications" className="form-control" name="certifications" id="certifications" value={this.state.certifications} required/>
			        </div>
			        <div className="form-group">
			          <label htmlFor="ratePerHour" className="control-label col-sm-2">Rate Per Hour</label>
			          <input type="ratePerHour" className="form-control" name="ratePerHour" id="ratePerHour" value={this.state.ratePerHour} required/>
			        </div>
			       
			        <div className="form-group">
			          <button className="btn btn-primary" type="submit" id="sitter-submit" onClick={this.onSubmit}>Submit</button>
			        </div>
			      </form>
			    </div>
			  </div>
			)
		}
		
	}
})

module.exports = SitterProfile;