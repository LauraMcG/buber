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
    // console.log("this.state.isAvailable: " + this.state.isAvailable);

    this.setState({isAvailable: newAvailability});
    // console.log("newAvailability: " + newAvailability);

    helpers.putBabysitterAvailability(this.props._UserID, newAvailability)
    .then((data) => {
      this.props.handleAvailabilityUpdate(data.isAvailable);

      // console.log("availability after call:", data.isAvailable);

    });

  }

  componentDidMount () {
    
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