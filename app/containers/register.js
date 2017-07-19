var React = require("react");
var helpers = require("../utils/helpers");
var ParentProfile = require("../components/register/ParentProfile");
var SitterProfile = require("../components/register/SitterProfile");
var Link = require("react-router").Link;


var Register = React.createClass({
	getInitialState: function(){
		return {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			submitted: 'false'
		};

	},
	handleChange: function(event){
		var newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
	},
	handleOptionChange: function (changeEvent) {
	  this.setState({
	    selectedRole: changeEvent.target.value
	  });
	},
	onSubmit: function (e){
		e.preventDefault();
		helpers.postUser(this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.selectedRole).then(function(id){
			this.setState({'submitted': true, 'id': id });
			console.log(id);
		}.bind(this));
	},
	render: function(){
		if (this.state.selectedRole == 1 && this.state.submitted === true){
			return <ParentProfile id={this.state.id} firstName={this.state.firstName}/>;
		} else if (this.state.selectedRole == 2 && this.state.submitted === true){
			return <SitterProfile id={this.state.id} firstName={this.state.firstName}/>;
		} else {
			return (
				<div className="row">
			    <div className="col-md-12">
			  
					      <h2>Register</h2>
					      <form method="POST" action="/users">
					      	<div className="form-group">
					          <label className="control-label" htmlFor="firstName">First Name</label>
					          <input className="form-control" name="firstName" id="firstName" value={this.state.firstName} onChange={this.handleChange} required/>
					        </div>
					        <div className="form-group">
					          <label className="control-label" htmlFor="lastName">Last Name</label>
					          <input name="lastName" className="form-control" id="lastName" value={this.state.lastName} onChange={this.handleChange} required/>
					        </div>
					        <div className="form-group">
					          <label htmlFor="email" className="control-label col-sm-2">Email</label>
					          <input type="email" className="form-control" name="email" id="email"  value={this.state.email} onChange={this.handleChange} required/>
					        </div>
					        <div className="form-group">
					          <label htmlFor="password" className="control-label col-sm-2">Password</label>
					          <input className="form-control" name="password" type="password" id="password" pattern="[a-zA-Z0-9]{5,}" title="Password must include at least 5 letters/numbers" value={this.state.password} onChange={this.handleChange}required/>
					        </div>
					        <div className="form-group">
					          <label htmlFor="password" className="control-label col-sm-2">Are you registering as a Parent/Guardian or Babysitter?</label>
						        <div className="radio">
										  <label><input type="radio" name="role" value="1" checked= {this.state.selectedRole === 1} onChange={this.handleOptionChange} />Parent/Guardian</label>
										</div>
										<div className="radio">
										  <label><input type="radio" name="role" value="2"checked= {this.state.selectedRole === 2} onChange={this.handleOptionChange} />Babysitter</label>
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

	