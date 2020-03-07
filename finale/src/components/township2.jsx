import React, { Component } from 'react';
import data from "../data"

class Township2 extends Component {

  state = {
    isHidden: true,
  }

  renderTownRow(arrayTowns) {

    return arrayTowns.map((item, i) => {
      return (
        <tr className="names" key={item.id} >
          <td>{item.title}</td>
          <td>{item.lastIn}</td>
          <td>{item.numForms}</td>
          <td>{item.numVotes}</td>
          <td>{item.update}</td>
        </tr>
      )
    })
  }

  render() {

    let allItemRows = [];
    let numStates = data.length;

    for (let i = 0; i < numStates; i++) {
      let numDist = data[i].subRegions.length;


      for (let dist = 0; dist < numDist; dist++) {
        let numTown = data[i].subRegions[dist].subRegions.length;

        for (let town = 0; town < numTown; town++) {
          console.log(data[i].subRegions[dist].subRegions)
          allItemRows = this.renderTownRow(data[i].subRegions[dist].subRegions);
        }
      }
    }

    return (
      <tr>{allItemRows}</tr>
    );
  }

  //closing bracket of component
}

export default Township2;
