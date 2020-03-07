import React, { Component } from 'react';
import data from "../data"

class Township4 extends Component {

  state = {
    isHidden: true,
  }

  //   renderTownRow(sta) {
  //     //Number of states
  //     let numStates = sta.length;

  //     for (let i = 0; i < numStates; i++) {

  //       console.log("state " + sta[i]);
  //       //Number of districts
  //       let numDist = sta[i].subRegions.length;

  //       for (let dist = 0; dist < numDist; dist++) {

  //         //Number of towns
  //         let numTown = sta[i].subRegions[dist].subRegions.length;

  //         let distArray = sta[i].subRegions;

  //         {
  //           distArray.map((town) =>
  //             <div>{town.title}</div>
  //           )
  //         }
  //       }

  //     }
  //   }
  // }

  render() {
    let numStates = data.length;
    for (let i = 0; i < numStates; i++) {

      console.log("state " + data[i]);
      //Number of districts
      let numDist = data[i].subRegions.length;

      for (let dist = 0; dist < numDist; dist++) {

        //Number of towns
        let numTown = data[i].subRegions[dist].subRegions.length;

        let distArray = data[i].subRegions;

        {
          return distArray.map((dist) =>
            <div>{dist.title}
              <ul>
                {dist.subRegions.map((subDist) =>
                  <tr className="names">
                    <td>{subDist.title}</td>
                    <td>{subDist.lastIn}</td>
                    <td>{subDist.numForms}</td>
                    <td>{subDist.numVotes}</td>
                    <td>{subDist.update}</td>
                  </tr>
                )}
              </ul>
            </div>
          )
        }
      }

    }

    // return (
    //   this.renderTownRow(data)
    // )
  }
}


export default Township4;
