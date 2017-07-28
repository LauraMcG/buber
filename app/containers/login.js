var React = require("react");
var Link = require("react-router").Link;
var Auth = require("../../server/passport/auth-token");
var helpers = require("../utils/helpers");

var Login = React.createClass({
	getInitialState: function(){
		return {
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
		helpers.checkUser(this.state.email, this.state.password).then(function(response){
		//console.log(JSON.stringify(response));
		  Auth.authenticateUser(response.data.token);
	      localStorage.removeItem("successMessage");
		  this.setState({ redirect: true });
		}.bind(this));

	// 		event.preventDefault();
	// helpers.checkUSer("/auth/login", {
	//   "username": this.state.username,
	//   "password": this.state.password
	// }).then((response) => {
	//   //console.log(JSON.stringify(response));
	//   Auth.authenticateUser(response.data.token);
 //      localStorage.removeItem("successMessage");
	//   this.setState({ redirect: true });
	// })
	},
	render: function(){
		return (
		<div>
			<div className="row mainRow seafoam">

			    <div className="col-md-12 heroContent">
			      <h1>In one click, reach all the babysitters in your neighborhood.</h1>
			      <h1><span className="underlineSpan">35</span> babysitters are available at this very moment.</h1>
			      <h1>What are you waiting for?</h1>
			    </div>

			</div> 

		<div className="row registerRow">
		 <div className="col-md-12">
		 <h3 className= "registerHeader">Login</h3>
			<form method="POST" action="/login">
		        <div className="form-group">
		          <label htmlFor="email" className="control-label col-sm-2">Email</label>
		          <input type="email" className="form-control" name="email" id="email"  value={this.state.email} onChange={this.handleChange} required/>
		        </div>
		        <div className="form-group">
		          <label htmlFor="password" className="control-label col-sm-2">Password</label>
		          <input className="form-control" name="password" type="password" id="password" pattern="[a-zA-Z0-9]{5,}" title="Password must include at least 5 letters/numbers" value={this.state.password} onChange={this.handleChange}required/>
		        </div>
		                
		        <div className="form-group">
		          <button className="btn btn-primary" type="submit" id="login-submit" onClick={this.onSubmit}>Submit</button>
		        </div>
		      </form>
		      <p>Current User? <Link to={'/register'}>Register</Link></p>
		     </div>
		    </div>
		  </div>
		)
	}
})

module.exports = Login;

	