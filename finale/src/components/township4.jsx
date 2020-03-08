import React, { Component } from 'react';
import data from "../data"

class Township4 extends Component {
  constructor() {
    super();

    //Dummy data
    this.state = {
      data: [
        {
          name: "dist1",
          subRegions: [
            { townName: "town11" },
            { townName: "town12" },
          ]
        },
        {
          name: "dist2",
          subRegions: [
            { townName: "town21" },
            { townName: "town22" },
          ]
        },
      ]
    }
  }

  renderTownRow(districtArray) {
    return (
      <div>
        {
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
        }
      </div>
    )
  }

  getDistArray() {
    let numStates = data.length;
    let distArray = [];

    for (let stateInd = 0; stateInd < numStates; stateInd++) {
      let numDist = data[stateInd].subRegions.length;
      for (let dist = 0; dist < numDist; dist++) {
        let tempDistArray = data[stateInd].subRegions;
        distArray = tempDistArray;
      }
    }
    return distArray;
  }

  render() {
    let allItemRows = [];
    let numStates = data.length;

    for (let stateInd = 0; stateInd < numStates; stateInd++) {
      let perItemRows = this.renderTownRow(data[stateInd].subRegions)
      console.log(perItemRows);
      let currDistRow = data[stateInd].subRegions;

      // allItemRows = allItemRows.concat(currDistRow)
      allItemRows = currDistRow.concat(perItemRows);

      //Once you fix bug on township row to get town objects from right subRegion - put this line of code back 
      // allItemRows = perItemRows;
    }

    return (
      <tr> {allItemRows}</tr>
    )
  }
}


export default Township4;
