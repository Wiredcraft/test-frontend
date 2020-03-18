import React, { Component } from 'react';

class Township5 extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <tr className="names" key={"town-row-data-" + this.props.town.id}>
        <td>{this.props.town.title}</td>
        <td>{this.props.town.lastIn}</td>
        <td>{this.props.town.numForms}</td>
        <td>{this.props.town.numVotes}</td>
        <td>{this.props.town.update}</td>
      </tr>
    )
  }
}


export default Township5;
