import React, { Component } from 'react';

class DropFilter2 extends Component {

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

export default DropFilter2;

// import React from 'react';

// const DropFilter2 = (props) => {
//   let handleChange = (event) => { props.onChange(event.target.value) }

//   return (
//     <select className="dropFilter" onChange={handleChange}>
//       <option value="State">State</option>
//       <option value="District">District</option>
//       <option value="Township">Township</option>
//     </select>
//   )
// }

// export default DropFilter2;

