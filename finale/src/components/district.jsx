import React, { Component } from 'react';
import data from "../data"
import Township from './township';
import Township2 from './township2';
import Township3 from './township3';
import Township4 from './township4';

class District extends Component {
  constructor() {
    super();
    this.state = {
      expandedRows: []
    };
  }

  //Click handler for expanding rows
  handleRowClick(rowId) {
    const currentExpandedRows = this.state.expandedRows;
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

    const newExpandedRows = isRowCurrentlyExpanded ?
      currentExpandedRows.filter(id => id !== rowId) :
      currentExpandedRows.concat(rowId);

    this.setState({ expandedRows: newExpandedRows });
  }

  //Rendering function for district row
  renderItem(item) {
    const clickCallback = () => this.handleRowClick(item.id);

    const itemRows = [
      <tr className="names" key={"row-data-" + item.id}>
        <td> {item.title}
          <button className="toggle-btn" onClick={clickCallback}>{item.subRegions.length} Townships</button>
        </td>
        <td>{item.lastIn}</td>
        <td>{item.numForms}</td>
        <td>{item.numVotes}</td>
        <td>{item.update}</td>
      </tr>
    ];

    //Toggle for rendering township rows of the district if there are townships under the district
    if (item.subRegions.length > 0 && this.state.expandedRows.includes(item.id)) {
      for (let i = 0; i < item.subRegions.length; i++) {
        itemRows.push(
          <Township />
        )
      }
    }
    return itemRows;
  }

  render() {
    let allItemRows = [];
    let numStates = data.length;

    // for(let i = 0; i < allItemRows.length; i++){
    //   let perItemRows = this.renderItem(data[i].subRegions)
    // }

    for (let i = 0; i < numStates; i++) {
      let numDist = data[i].subRegions.length;

      for (let dist = 0; dist < numDist; dist++) {
        let perItemRows = this.renderItem(data[i].subRegions[dist]);

        allItemRows = allItemRows.concat(perItemRows);

        //Once you fix bug on township row to get town objects from right subRegion - put this line of code back 
        // allItemRows = perItemRows;
      }
    }

    // data.forEach(item => {
    //   const perItemRows = this.renderItem(item);
    //   allItemRows = allItemRows.concat(perItemRows);
    // });

    return (
      <tr>{allItemRows}</tr>
    );
  }
}

export default District;