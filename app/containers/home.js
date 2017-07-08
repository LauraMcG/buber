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
				      <h1>In one click, reach all the babysitters in your neighborhood.</h1>
				      <h1><span className="underlineSpan">35</span> babysitters are available at this very moment.</h1>
				      <h1>What are you waiting for?</h1>
				    </div>

			  	</div> 
			  {this.props.children}
			</div>
		</div>
		)
	}
})

module.exports = Home;