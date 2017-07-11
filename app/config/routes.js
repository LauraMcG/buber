// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component
var Route = router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Include the Router component
var Router = router.Router;

// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
var browserHistory = router.browserHistory;

// Reference the high-level components
var Home = require("../containers/Home");
var Login = require("../containers/Login");
var Register = require("../containers/Register");

var BabysitterView = require("../containers/babysitterView");
var ParentView = require("../containers/parentView");

// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Home}>


      {/* If user selects Register or Login show the appropriate component */}
      <Route path="Register" component={Register} />
      <Route path="Login" component={Login} />

        <Route path="babysitters" component={BabysitterView} />
        <Route path="parents" component={ParentView} />


      {/* If user selects any other path... we get the Home Route */}
      
      <IndexRoute component={Register} />

    </Route>
  </Router>
);