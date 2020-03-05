import React, { Component } from 'react';
import data from "../data"

class Township extends Component {

  state = {
    isHidden: true,
  }

  renderTownRow(item) {

    //Number of states
    let numStates = item.length;

    for (let i = 0; i < numStates; i++) {
      // console.log(item[i]);

      //Number of districts
      let numDist = item[i].subRegions.length;
      // console.log(numDist);

      for (let dist = 0; dist < numDist; dist++) {
        // console.log(item[i].subRegions[dist]);

        //Number of towns
        let numTown = item[i].subRegions[dist].subRegions.length;

        for (let town = 0; town < numTown; town++) {
          // console.log(item[i].subRegions[dist].subRegions[town]);

          return item[i].subRegions[dist].subRegions.map((key, i) => {
            return (
              <tr className="names" key={"town-" + item[i].subRegions[dist].subRegions[town].id}>
                <td>{item[i].subRegions[dist].subRegions[town].title}</td>
                <td>{item[i].subRegions[dist].subRegions[town].lastIn}</td>
                <td>{item[i].subRegions[dist].subRegions[town].numForms}</td>
                <td>{item[i].subRegions[dist].subRegions[town].numVotes}</td>
                <td>{item[i].subRegions[dist].subRegions[town].update}</td>
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
