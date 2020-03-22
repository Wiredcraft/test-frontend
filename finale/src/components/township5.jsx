import React, { Component } from 'react';
import dl_logo from "../img/download_icon.png"
import town_logo from "../img/Town_logo.png"

class Township5 extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <tr className="names" key={"town-row-data-" + this.props.town.id}>
        <td>
          <img className="dl_logo" src={town_logo} alt="town_logo" />
          <span>{this.props.town.title}</span>
          <img className="dl_logo" src={dl_logo} alt="dl_icon" />
        </td>
        <td>{this.props.town.lastIn}</td>
        <td>{this.props.town.numForms}</td>
        <td>{this.props.town.numVotes}</td>
        <td>{this.props.town.update}</td>
      </tr>
    )
  }
}

export default Township5;
