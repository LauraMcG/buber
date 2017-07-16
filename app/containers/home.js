var React = require("react");

var Link = require("react-router").Link;

var MainNav= require ('../components/main-nav')

var Home = React.createClass({
	render: function(){
		
		return (
		<div>
			<MainNav />
			<div className="col-md-12">
				<div className="row mainRow seafoam">

				    <div className="col-md-12 heroContent">
				      <h1>Welcome to buber!</h1>
				    </div>

			  	</div> 
			  {this.props.children}
			</div>
		</div>
		)
	}
})

module.exports = Home;