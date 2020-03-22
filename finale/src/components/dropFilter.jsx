import React, { Component } from 'react';
import District from './district';

class DropFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'State' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.filter(this.state.value);
  }

  filter(value) {
    console.log("value is    " + value);

    if (this.state.value === "District")
      return <District />
  }

  handleSubmit(event) {
    alert('Current level is: ' + this.state.value);
  }

  render() {
    return (
      <div>
        <select className="dropFilter" value={this.state.value} onChange={this.handleChange}>
          <option value="State">State</option>
          <option value="District">District</option>
          <option value="Township">Township</option>
        </select>
      </div>
    );
  }
}

export default DropFilter;


// export const Filter = (props) => {
//   let HandleChange = (event) => {
//     props.onChange(event.target.value)
//   }

