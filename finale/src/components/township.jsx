import React, { Component } from 'react';
import data from "../data"

class Township extends Component {

  state = {
    isHidden: true,
  }

  renderTownRow(sta) {
    //Number of states
    let numStates = sta.length;

    for (let i = 0; i < numStates; i++) {

      console.log("state " + sta[i]);
      //Number of districts
      let numDist = sta[i].subRegions.length;

      for (let dist = 0; dist < numDist; dist++) {

        // console.log(sta[i].subRegions[dist]);

        //Number of towns
        let numTown = sta[i].subRegions[dist].subRegions.length;

        for (let town = 0; town < numTown; town++) {
          console.log(sta[i].subRegions[dist].subRegions[town]);
          return sta[i].subRegions[dist].subRegions.map((key, i) => {
            return (
              <tr className="names" key={"town-" + sta[i].subRegions[dist].subRegions[town].id}>
                <td>{sta[i].subRegions[dist].subRegions[town].title}</td>
                <td>{sta[i].subRegions[dist].subRegions[town].lastIn}</td>
                <td>{sta[i].subRegions[dist].subRegions[town].numForms}</td>
                <td>{sta[i].subRegions[dist].subRegions[town].numVotes}</td>
                <td>{sta[i].subRegions[dist].subRegions[town].update}</td>
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
