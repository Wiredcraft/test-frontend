import React, { Component } from 'react';

class DropFilter extends Component {

  handleSelect = (event) => {
    this.props.handleLevel(event.target.value);
  }

  render() {
    return (
      <select className="dropFilter" onChange={this.handleSelect}>
        <option value="State">State</option>
        <option value="District">District</option>
        <option value="Township">Township</option>
      </select >
    );
  }
}

export default DropFilter;
