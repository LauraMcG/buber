import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// var Link = require("react-router").Link;
import helpers from '../utils/helpers';
import AppointmentList from '../components/appointment-list';

class BabysitterView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: []
        };
        // this.handleAppointment=this.handleAppointment.bind(this);
    }
    componentDidMount () {
        //Helper to grab all appointments for specific babysiter - i.e. search on babysitter ID
        helpers.getAllAppointments().then(function(appointmentData){
            this.setState({
                appointments: appointmentData.data,
            });
            console.log("all singular babysitter appointments: " , appointmentData.data);
        }.bind(this));
    }


    //Another helper to bring here specific babysitter data here and pass the state to the toogle component

var BabysitterView = React.createClass({
	render: function(){
		
		return (
			<div><h1>Babysitter View</h1></div>
			
		)
	}
})


    //Show Toogle Availability for Babysitter and show appointment (that user's, ideally)
    render () {
        return (
            <div> <h1>Hello!</h1>
                <AppointmentList 
                    appointments = {this.state.appointments}/>
            </div>
        );
    }
}
module.exports = BabysitterView;
// var BabysitterView = React.createClass({
//  render: function(){
        
//      return (
//          <div><h1>hello</h1></div>
            
//      )
//  }
// })
// module.exports = BabysitterView;