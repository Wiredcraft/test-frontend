import React, { Component } from 'react';

class DropFilter2 extends Component {

  handleChange(event) {
    return this.props.event;
  }

  render() {
    return (
      <select className="filter" onChange={(event) => this.handleChange(event.target.value)}>
        <option value="State">State</option>
        <option value="District">District</option>
        <option value="Township">Township</option>
      </select >
    );
  }
}

export default DropFilter2;