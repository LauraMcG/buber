import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Toggle from 'react-bootstrap-toggle';

import { Bootstrap2Toggle } from 'react-bootstrap-toggle';

class ToggleButton extends Component {
  constructor() {
    super();
    this.state = { toggleActive: false };
    this.onToggle = this.onToggle.bind(this);
  }
 
  onToggle() {
    this.setState({ toggleActive: !this.state.toggleActive });
  }
 
  render() {
    return (
      <form>
     
        
        <Toggle
          onClick={this.onToggle}
          on={<h2>AVAILABLE</h2>}
          off={<h2>UNAVAILABLE</h2>}
          size="xs"
          offstyle="danger"
          active={this.state.toggleActive}
          className=
        />
      </form>
    )
  }
 
}

export default ToggleButton;