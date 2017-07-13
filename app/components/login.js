var React = require("react");

var Link = require("react-router").Link;

var Login = React.createClass({
	getInitialState: function (){
		return{
			email: "",
			password: ""
		}	
	},
	handleChange: function (event){
		var newState = {};
	    newState[event.target.name] = event.target.value;
	    this.setState(newState);
	},
	handleSubmit: function (event){
		preventDefault(event);
		
	},
	render: function(){
		return (
			<div className="row">
		    <div className="col-md-12">
		  
				      <h2>Login</h2>
				      <form method="POST" action="/login">
				        <div className="form-group">
				          <label htmlFor="email" className="control-label col-sm-2">Email</label>
				          <input type="email" className="form-control" name="email" id="email" onChange = {this.state.handleChange} value = {this.state.email} required/>
				        </div>
				        <div className="form-group">
				          <label htmlFor="pwd" className="control-label col-sm-2">Password</label>
				          <input className="form-control" name="pwd" type="password" id="pwd" onChange = {this.state.handleChange} pattern="[a-zA-Z0-9]{5,}" title="Password must include at least 5 letters/numbers" value = {this.state.password} required/>
				        </div>
				        <div className="form-group">
				          <button className="btn btn-primary" type="submit" onSubmit = {this.state.handleSubmit} id="login-submit">Submit</button>
				        </div>
				      </form>
				      <p>Need to Sign Up? <Link to={'/register'}>Register</Link></p>
				   		  
		    </div>
		  </div>
		)
	}
})

module.exports = Login;

	