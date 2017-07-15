var React = require("react");
var helpers = require("../../utils/helpers");
var ParentView = require("../../containers/parentView");
var Link = require("react-router").Link;

var ParentProfile = React.createClass({
	getInitialState: function(){
		return {
			_parentID: '',
			address: '',
			phoneNumber: '',
			numChildren: '',
			emergencyFirstName: '',
			emergencyLastName: '',
			emergencyPhoneNumber: '',
			doctorLastName: '',
			doctorPhoneNumber: '',
			wifiPassword: '',
			submitted: 'false'
		};
	},
	handleChange: function(event){
		var newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
	},
	onSubmit: function(e){
		e.preventDefault();
		helpers.postParent(this.props.id, this.state.address, this.state.phoneNumber, this.state.numChildren, this.state.emergencyFirstName, this.state.emergencyLastName, this.state.emergencyPhoneNumber, this.state.doctorLastName, this.state.doctorPhoneNumber, this.state.wifiPassword).then(function(data){
				this.setState({'submitted': true, 'data': data});
		}.bind(this));
	},
	render: function(){
		if (this.state.submitted === true){
			return(
					<ParentView
						_parentID = {this.state.parentID} 
			      address = {this.state.address} 
			      phoneNumber = {this.state.phoneNumber} 
			      numChildren = {this.state.numChildren} 
			      emergencyFirstName = {this.state.emergencyFirstName} 
			      emergencyLastName = {this.state.emergencyLastName} 
			      emergencyPhoneNumber = {this.state.emergencyPhoneNumber} 
			      doctorLastName = {this.state.doctorLastName} 
			      doctorPhoneNumber = {this.state.doctorPhoneNumber} 
			      wifiPassword = {this.state.wifiPassword}
					/>
				)
		} else {
			return (
				<div className="row">
			    <div className="col-md-12">
					      <h2>Parent Profile</h2>
					      <form method="POST" action="/parents">
					      	<div className="form-group">
					          <label className="control-label" htmlFor="address">Address</label>
					          <input className="form-control" name="address" id="address" value={this.state.address} onChange={this.handleChange} required/>
					        </div>
					        <div className="form-group">
					          <label className="control-label" htmlFor="phoneNumber">Phone Number</label>
					          <input name="phoneNumber" className="form-control" id="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange}required/>
					        </div>
					        <div className="form-group">
					          <label htmlFor="numChildren" className="control-label col-sm-2">Number of Children</label>
					          <input type="numChildren" className="form-control" name="numChildren" id="numChildren"  value={this.state.numChildren} onChange={this.handleChange}required/>
					        </div>
					        <div className="form-group">
					          <label htmlFor="emergencyFirstName" className="control-label col-sm-2">Emergency First Name</label>
					          <input type="emergencyFirstName" className="form-control" name="emergencyFirstName" id="emergencyFirstName"  value={this.state.emergencyFirstName} onChange={this.handleChange}required/>
					        </div>
					        <div className="form-group">
					          <label htmlFor="emergencyLastName" className="control-label col-sm-2">Emergency Last Name</label>
					          <input type="emergencyLastName" className="form-control" name="emergencyLastName" id="emergencyLastName"  value={this.state.emergencyLastName} onChange={this.handleChange}required/>
					        </div>
					        <div className="form-group">
					          <label htmlFor="emergencyPhoneNumber" className="control-label col-sm-2">Emergency Phone Number</label>
					          <input type="emergencyPhoneNumber" className="form-control" name="emergencyPhoneNumber" id="emergencyPhoneNumber"  value={this.state.emergencyPhoneNumber} onChange={this.handleChange} required/>
					        </div>
					        <div className="form-group">
					          <label htmlFor="doctorLastName" className="control-label col-sm-2">Doctor Last Name</label>
					          <input type="doctorLastName" className="form-control" name="doctorLastName" id="doctorLastName"  value={this.state.doctorLastName} onChange={this.handleChange}required/>
					        </div>
					        <div className="form-group">
					          <label htmlFor="doctorPhoneNumber" className="control-label col-sm-2">Doctor Phone Number</label>
					          <input type="doctorPhoneNumber" className="form-control" name="doctorPhoneNumber" id="doctorPhoneNumber"  value={this.state.doctorPhoneNumber} onChange={this.handleChange}required/>
					        </div>
					        <div className="form-group">
					          <label htmlFor="wifiPassword" className="control-label col-sm-2">Wifi Password</label>
					          <input type="wifiPassword" className="form-control" name="wifiPassword" id="wifiPassword"  value={this.state.wifiPassword} onChange={this.handleChange}/>
					        </div>
					        <div className="form-group">
					          <label htmlFor="favSitters" className="control-label col-sm-2">Favorite Sitters</label>
					          <input type="favSitters" className="form-control" name="favSitters" id="favSitters" value={this.state.favSitters} onChange={this.handleChange}/>
					        </div>
					        <div className="form-group">
					          <button className="btn btn-primary" type="submit" id="parent-submit" onClick={this.onSubmit}>Submit</button>
					        </div>
					      </form>
			    </div>
			  </div>
			)
		}
		
	}
})

module.exports = ParentProfile;