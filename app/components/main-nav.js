var React = require("react");

var Link = require("react-router").Link;
var Auth = require("../../server/passport/auth-token");

var MainNav = React.createClass({
  render() {
    return(
  <div>
      <nav className="navbar navbar-default">
            <div className="container-fluid">

                <div className="row navbar-header">
                      <Link className="navbar-brand" to="/">
                        Babysitters Club
                      </Link>

                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#cb-navbar-collapse-1" aria-expanded="false">
                         
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>

                      </button>
                
                </div>
             
                <div className="row ">
                  <div className="navLinkWrapper">
                      <div className="collapse navbar-collapse" id="cb-navbar-collapse-1">
                          <ul className="nav navbar-nav">
                            <li><Link className="navlinks" to="/babysitters">Babysitters</Link></li>
                            <li><Link className="navlinks" to="/parents">Parents</Link></li>
                          
                          
                            {Auth.isUserAuthenticated() ? (
                                
                                  <li><Link className="navlinks" to="/logout">Log out</Link></li>
                             
                              ) : (
                                
                                  <li><Link className="navlinks" to="/login">Log in</Link></li>
                                
                            )}
                           

                          </ul>
                      </div>
                  </div>
                </div>
            </div>
        </nav>
       </div>  
    );
  }
});

module.exports = MainNav;
