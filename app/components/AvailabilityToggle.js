import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import helpers from '../utils/helpers';

class AvailabilityToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isAvailable: true
    };

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick (event) {
    event.preventDefault();
    var newAvailability = !this.state.isAvailable;
    console.log("this.state.isAvailable: " + this.state.isAvailable);

    this.setState({isAvailable: newAvailability});
    console.log("newAvailability: " + newAvailability);
    console.log(this.props._userID);

    helpers.putBabysitterAvailability(this.props._userID, newAvailability)
    .then((data) => {

      // console.log(data);
      this.props.handleAvailabilityUpdate(data.isAvailable);

      console.log("availability after axios:", data.isAvailable);
    });  
  }

  componentDidMount () {
    // console.log("this.props.id", this.props._userID);
  }

  render() {      
    return (    
      <div>  
      {/* <OtherComponent /> 
        {this.state.active && <Child />} */ }
        <button type="button" onClick={this.handleClick}>
          Toggle
        </button> 
      </div>            
    );          
  }
}

export default AvailabilityToggle;