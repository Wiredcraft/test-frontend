import React, { Component } from 'react';
import data from "../data"

class Township extends Component {

  state = {
    isHidden: true,
  }

  renderTownRow(sta) {
    //Number of states
    let numStates = sta.length;

    for (let staInd = 0; staInd < numStates; staInd++) {

      //Number of districts
      let numDist = sta[staInd].subRegions.length;

      for (let distInd = 0; distInd < numDist; distInd++) {

        //Number of towns
        let numTown = sta[staInd].subRegions[distInd].subRegions.length;

        for (let townInd = 0; townInd < numTown; townInd++) {
          console.log(sta[staInd].subRegions[distInd].subRegions[townInd]);

          let townArray = sta[staInd].subRegions[distInd].subRegions;

          return townArray.map((key, staInd) => {
            return (
              <tr className="names" >
                <td>{sta[staInd].subRegions[distInd].subRegions[townInd].title}</td>
                <td>{sta[staInd].subRegions[distInd].subRegions[townInd].lastIn}</td>
                <td>{sta[staInd].subRegions[distInd].subRegions[townInd].numForms}</td>
                <td>{sta[staInd].subRegions[distInd].subRegions[townInd].numVotes}</td>
                <td>{sta[staInd].subRegions[distInd].subRegions[townInd].update}</td>
              </tr>
            )
          });
        }
      }
    }
  }

  render() {
    return (
      this.renderTownRow(data)
    )
  }
}

export default Township;
