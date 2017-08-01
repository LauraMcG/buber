import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import helpers from '../utils/helpers';

class AvailabilityToggle extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isAvailable: true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    var newAvailability = !this.state.isAvailable;
    // console.log("this.state.isAvailable: " + this.state.isAvailable);
    this.setState({isAvailable: newAvailability});
    // console.log("newAvailability: " + newAvailability);

    helpers.putBabysitterAvailability(this.props._userID, newAvailability)
    .then((data) => {
      this.props.handleAvailabilityUpdate(data.isAvailable);
      // console.log("availability after axios:", data.isAvailable);
    });  
  }

  render() {   

    let button;
    let avaiabilityStatus;

    if (this.state.isAvailable) {

      avaiabilityStatus = "available";

      button = (
      <div>  
        <button onClick={this.handleClick}>
          Set as unavailable!
        </button> 
      </div>  
      )

    } else {

      avaiabilityStatus = "not available";

      button = (
      <div>  
        <button onClick={this.handleClick}>
          Set as available!
        </button> 
      </div>  
      )
    }

    return (
      <div>
        <h3>You are listed as {avaiabilityStatus}.</h3>
        { button }
      </div>
    );

  }

}



    // if (this.props.isAvailable) {
    //   return (
    //     <div>  
    //     <button type="button" onClick={this.handleClick}>
    //       Available
    //     </button> 
    //     </div>   
    //   );
    // }   
    // return (    
    //   <div>  
    //     <button type="button" onClick={this.handleClick}>
    //       Unavailable
    //     </button> 
    //   </div>            
    // );          




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
// }

export default AvailabilityToggle;