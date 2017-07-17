
var React = require("react");
var ReactDOM = require("react-dom");

// Grabs the Routes
var routes = require("./config/routes");
var Login = require("./containers/Login");

// Renders the contents according to the route page
// Displays the contents in the div app of index.htmltouch 
ReactDOM.render(<Login />, document.getElementById("app"));