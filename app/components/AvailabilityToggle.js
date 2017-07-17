import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Toogle extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isAvailable: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  const handleClick = () => {
    this.setState({active = !this.state.active});
  }
  componentDidMount () {
    
  }
  render() {      
    return (    
      <div>  
        <OtherComponent />
        {this.state.active && <Child />}
        <button type="button" onClick={handleClick}>
          Toggle
        </button>
      </div>            
    );          
  }
}