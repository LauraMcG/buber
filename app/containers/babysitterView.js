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
            appointments: [] ,
            availability: null,
        };
        this.handleAvailabilityUpdate=this.handleAvailabilityUpdate.bind(this);
    }

    handleAvailabilityUpdate(availability) {
        // console.log("handleAvailabilityUpdate before: " , availability);
        const  newAvailability = availability;

        this.setState ({
            availability: newAvailability
        });
    }

    componentDidMount () {
        // Helper to grab all appointments for specific babysiter - i.e. search on babysitter ID
        helpers.getAllAppointments().then(function(appointmentData){
            this.setState({
                appointments: appointmentData.data,
            });
            console.log("all singular babysitter appointments: " , appointmentData.data);
        }.bind(this));
    }
    //Show Toggle Availability for Babysitter and show appointment (that user's, ideally)
    render () {
        return (
            <div> <h1>Hello!</h1>
                <AppointmentList 
                    appointments = {this.state.appointments}/>
                <AvailabilityToggle handleAvailabilityUpdate = {this.handleAvailabilityUpdate} />

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