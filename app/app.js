
var React = require("react");
var ReactDOM = require("react-dom");

// Grabs the Routes
var routes = require("./config/routes");

// Renders the contents according to the route page
// Displays the contents in the div app of index.htmltouch 
ReactDOM.render(routes, document.getElementById("app"));