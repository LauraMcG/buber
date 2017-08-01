import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// var Link = require("react-router").Link;
import helpers from '../utils/helpers';
import AppointmentList from '../components/appointment-list';
import AvailabilityToggle from '../components/AvailabilityToggle'

class BabysitterView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: [],
            availability: true,
        };
        this.handleAvailabilityUpdate=this.handleAvailabilityUpdate.bind(this);
    }

    handleAvailabilityUpdate(availability) {
        console.log("handleAvailabilityUpdate before: " , availability);
        const  newAvailability = availability;

        this.setState ({
            availability: newAvailability
        });
        console.log("handleAvailabilityUpdate after: " , availability);

        //Check for new appointments
        helpers.getAllSitterAppointments(this.props.userID).then(function(appointmentData){
            this.setState({
                appointments: appointmentData.data,
            });
            console.log("all singular babysitter appointments: " , appointmentData.data);
        }.bind(this));
    }

    componentDidMount () {
        // Helper to grab all appointments for specific babysiter - i.e. search on babysitter ID
        helpers.getAllSitterAppointments(this.props.userID).then(function(appointmentData){
            this.setState({
                appointments: appointmentData.data
            });
            console.log("all singular babysitter appointments: " , appointmentData.data);
        }.bind(this));

        console.log("this.props._userID", this.props.userID);
    }
    //Show Toggle Availability for Babysitter and show appointment (that user's, ideally)
    render () {
        return (
            <div> 

    <div className="row pink">
        <div className="col-xs-12 babysitterHeroContent">
          <div className="row">  
            <div className="col-xs-12">
               <h2>Buber redefines babysitting</h2>
            </div>
          </div>

           <div className="sideBorder">

            <div className="row">
              <div className="col-xs-6">
                <h3>Reach Your Neighbors</h3>
                <p>Buber puts you in touch with families in your community. You reach all the kids not just the ones you know.</p>
              </div>

              <div className="col-xs-6">
                <h3>Got a Minute? Babysit</h3>
                <p>Buber puts you in touch with families in your community. You reach all the kids not just the ones you know.</p>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6">
                <h3>Upcharge for High Demand</h3>
                <p>Certain dates book up fast. Get compensated accordingly.</p>
              </div>

              <div className="col-xs-6">
                <h3>Calendar</h3>
                <p>Our appointment noticeboard lists all of your appointments. You'll never forget a sitting appointment again.</p>
              </div>
            </div>

       </div>
      
    </div>
  </div>













                <h1>Hello {this.props.firstName}</h1>
                <AppointmentList 
                    appointments = {this.state.appointments}
                    role = "babysitter"
                />
                <AvailabilityToggle 
                    _userID = {this.props.userID}
                    handleAvailabilityUpdate = {this.handleAvailabilityUpdate} 
                />

            </div>
        );
    }
}


// var BabysitterView = React.createClass({
//  render: function(){
        
//      return (
//          <div><h1>hello</h1></div>
            
//      )
//  }
// })

module.exports = BabysitterView;