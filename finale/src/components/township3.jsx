import React, { Component } from 'react';
import data from "../data"

class Township3 extends Component {
  constructor() {
    super();
    this.state = {
      expandedRows: []
    };
  }

  renderItem(item) {
    const itemRows = [
      <tr className="names" key={"row-data-" + item.id}>
        <td> {item.title}</td>
        <td>{item.lastIn}</td>
        <td>{item.numForms}</td>
        <td>{item.numVotes}</td>
        <td>{item.update}</td>
      </tr>
    ];
    return itemRows;
  }

  render() {
    let allItemRows = [];
    let numStates = data.length;

    for (let i = 0; i < numStates; i++) {
      let numDist = data[i].subRegions.length;

      for (let dist = 0; dist < numDist; dist++) {
        let numTown = data[i].subRegions[dist].subRegions.length;

        for (let town = 0; town < numTown; town++) {

          const townArray = data[i].subRegions[dist].subRegions;
          // console.log(townArray);

          const listItems = townArray.map((t) =>
            <tr className="names" key={"town-" + data[i].subRegions[dist].subRegions[town].id}>
              <td>{t.title}</td>
            </tr>
          )

          allItemRows = listItems;

          // let perItemRows = this.renderItem(data[i].subRegions[dist].subRegions[town]);
          // allItemRows = perItemRows;
        }
      }
    }

    // for (let i = 0; i < numStates; i++) {
    //   let numDist = data[i].subRegions.length;

    //   for (let dist = 0; dist < numDist; dist++) {
    //     let numTown = data[i].subRegions[dist].subRegions.length;

    //     for (let town = 0; town < numTown; town++) {
    //       console.log(data[i].subRegions[dist].subRegions[town]);
    //       let perItemRows = this.renderItem(data[i].subRegions[dist].subRegions[town]);

    //     }
    //   }
    // }

    return (
      <tr> {allItemRows}</tr >
    );
  }
}

export default Township3;



