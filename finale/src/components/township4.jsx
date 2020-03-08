import React, { Component } from 'react';
import data from "../data"

class Township4 extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
    }
  }

  //Get town row for belonging district
  renderTownRow(districtArray) {
    return (
      districtArray.map((district) =>
        <tr className="names">
          {district.subRegions.map((town) =>
            <tr>
              <td>{town.title}</td>
              <td>{town.lastIn}</td>
              <td>{town.numForms}</td>
              <td>{town.numVotes}</td>
              <td>{town.update}</td>
            </tr>
          )}
        </tr>
      )
    )
  }

  render() {
    let allTownRows = [];
    let numStates = data.length;

    //Trying to render each town to belonging district
    for (let stateInd = 0; stateInd < numStates; stateInd++) {
      console.log(stateInd);

      let distArray = data[stateInd].subRegions

      allTownRows = this.renderTownRow(distArray)
      return allTownRows;
    }

    return (
      { allTownRows }
    )
  }
}


export default Township4;
