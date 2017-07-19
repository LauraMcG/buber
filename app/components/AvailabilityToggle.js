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
    if (this.props.isAvailable) {
      return (
        <div>  
        <button type="button" onClick={this.handleClick}>
          Available
        </button> 
        </div>   
      );
    }   
    return (    
      <div>  
        <button type="button" onClick={this.handleClick}>
          Unavailable
        </button> 
      </div>            
    );          
  }


  // render() {      
  //   return (    
  
  //     <div className="one">
  //       <div className="button-wrap" onClick={this.handleClick}>
  //         <div className="button-bg">
  //           <div className="button-out">unavailable</div>
  //           <div className="button-in">available</div>
  //           <div className="button-switch"></div>
  //         </div>
  //       </div>
  //     </div>
    

  //     <div>
  //       <button type="button" onClick={this.handleClick}>
  //         Toggle Availability
  //       </button> 
  //     </div>

  //   );          
  // }
}

export default AvailabilityToggle;