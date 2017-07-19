var React = require("react");

var Link = require("react-router").Link;

var MainNav= require ('../components/main-nav');

var Home = React.createClass({
	render: function(){
		
		return (
		<div>
			<MainNav />
			<div className="col-md-12">
			  {this.props.children}
			</div>
		</div>
		)
	}
})

module.exports = Home;