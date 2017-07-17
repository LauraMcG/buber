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
var SitterProfile = require("../components/register/SitterProfile");
var ParentProfile = require("../components/register/ParentProfile");
var BabysitterView = require("../containers/babysitterView");
var ParentView = require("../containers/parentView");
var Test = require("../containers/noRoleTest");
var Auth = require("../../server/passport/auth-token");

// Export the Routes
const routes = {
  // base component (wrapper for the whole application).
  component: Home,
  childRoutes: [
  //For now, all authenticated users will be directed to the parent view
    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, Test);
        } else {
          callback(null, Register);
        }
      }
    },

    {
      path: '/login',
      component: Login
    },

    {
      path: '/register',
      component: Register
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    }

  ]
};

export default routes;
// module.exports = (
//   // High level component is the Router component.
//   <Router history={browserHistory}>
//     <Route path="/" component={Home}>


//       {/* If user selects Register or Login show the appropriate component */}
//       <Route path="Register" component={Register} />
//       <Route path="Login" component={Login} />

//       <Route path="babysitters" component={SitterProfile} />
//       <Route path="parents" component={ParentProfile} />

//       <Route path="babysitters" component={BabysitterView} />
//       <Route path="parents" component={ParentView} />


//       {/* If user selects any other path... we get the Home Route */}
      
//       <IndexRoute component={Register} />

//     </Route>
//   </Router>
// );