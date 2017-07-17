// var React = require("react");

// var Link = require("react-router").Link;

//From tutorial
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Log in" primary />
      </div>

      <CardText>Don't have an account? <Link to={'/register'}>Create one</Link>.</CardText>
    </form>
  </Card>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
// var Login = React.createClass({
// 	getInitialState: function (){
// 		return{
// 			email: "",
// 			password: ""
// 		}	
// 	},
// 	handleChange: function (event){
// 		var newState = {};
// 	    newState[event.target.name] = event.target.value;
// 	    this.setState(newState);
// 	},
// 	handleSubmit: function (event){
// 		preventDefault(event);
		
// 	},
// 	render: function(){
// 		return (
// 			<div className="row">
// 		    <div className="col-md-12">
		  
// 				      <h2>Login</h2>
// 				      <form method="POST" action="/login">
// 				        <div className="form-group">
// 				          <label htmlFor="email" className="control-label col-sm-2">Email</label>
// 				          <input type="email" className="form-control" name="email" id="email" onChange = {this.state.handleChange} value = {this.state.email} required/>
// 				        </div>
// 				        <div className="form-group">
// 				          <label htmlFor="pwd" className="control-label col-sm-2">Password</label>
// 				          <input className="form-control" name="pwd" type="password" id="pwd" onChange = {this.state.handleChange} pattern="[a-zA-Z0-9]{5,}" title="Password must include at least 5 letters/numbers" value = {this.state.password} required/>
// 				        </div>
// 				        <div className="form-group">
// 				          <button className="btn btn-primary" type="submit" onSubmit = {this.state.handleSubmit} id="login-submit">Submit</button>
// 				        </div>
// 				      </form>
// 				      <p>Need to Sign Up? <Link to={'/register'}>Register</Link></p>
				   		  
// 		    </div>
// 		  </div>
// 		)
// 	}
// })

// module.exports = Login;

	