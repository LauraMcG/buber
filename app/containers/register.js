var React = require("react");

var Link = require("react-router").Link;

var Register = React.createClass({
	render: function(){
		return (
			<div className="row">
		    <div className="col-md-12">
		  
				      <h2>Register</h2>
				      <form method="POST" action="/login">
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
				          <input type="email" className="form-control" name="email" id="email" required/>
				        </div>
				        <div className="form-group">
				          <label htmlFor="pwd" className="control-label col-sm-2">Password</label>
				          <input className="form-control" name="pwd" type="password" id="pwd" pattern="[a-zA-Z0-9]{5,}" title="Password must include at least 5 letters/numbers" required/>
				        </div>
				        <div className="form-group">
				          <label htmlFor="pwd" className="control-label col-sm-2">Are you registering as a Parent/Guardian or Babysitter?</label>
					        <div className="radio">
									  <label><input type="radio" name="optradio"/>Parent/Guardian</label>
									</div>
									<div className="radio">
									  <label><input type="radio" name="optradio"/>Babysitter</label>
									</div>
								</div>
				        <div className="form-group">
				          <button className="btn btn-primary" type="submit" id="login-submit">Submit</button>
				        </div>
				      </form>
				      <p>Current User? <Link to={'/login'}>Login</Link></p>
				   
				  
		    </div>
		  </div>
		)
	}
})

module.exports = Register;

	