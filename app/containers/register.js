var React = require("react");

var Link = require("react-router").Link;

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
	onSubmit: function (userData){
		helpers.postUser(userData.firstName, userData.lastName, userData.email, userData.password, userData.role).then(function(){
			console.log("saved to database");
		})
	},
	render: function(){
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
})

module.exports = Register;

	