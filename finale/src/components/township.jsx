import React, { Component } from 'react';
import dl_logo from "../img/download_icon.png"
import town_logo from "../img/Town_logo.png"

class Township extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const { title, id, lastIn, numForms, numVotes, update } = this.props.town;

    return (
      <tr className="names" key={"town-row-data-" + id}>
        <td>
          <img className="dl_logo" src={town_logo} alt="town_logo" />
          <span>{title}</span>
          <img className="dl_logo" src={dl_logo} alt="dl_icon" />
        </td>
        <td>{lastIn}</td>
        <td>{numForms}</td>
        <td>{numVotes}</td>
        <td>{update}</td>
      </tr>
    )
  }
}

export default Township;
