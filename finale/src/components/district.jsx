import React, { Component } from 'react';
import data from "../data"
import Township from './township';
import Township4 from './township4';
import Township5 from './township5';

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
  renderItem(district) {
    const clickCallback = () => this.handleRowClick(district.id);

    const itemRows = [
      <tr className="names" key={"row-data-" + district.id}>
        <td> {district.title}

          <button className="toggle-btn" onClick={clickCallback}>{district.subRegions.length} Townships</button>

        </td>
        <td>{district.lastIn}</td>
        <td>{district.numForms}</td>
        <td>{district.numVotes}</td>
        <td>{district.update}</td>
      </tr>
    ];

    //Toggle for rendering township rows of the district if there are townships under the district
    if (district.subRegions.length > 0 && this.state.expandedRows.includes(district.id)) {
      for (let i = 0; i < district.subRegions.length; i++) {
        itemRows.push(
          <Township4 />
        )
      }
    }
    return itemRows;
  }

  render() {
    let allItemRows = [];
    let numStates = data.length;

    for (let stateInd = 0; stateInd < numStates; stateInd++) {
      let numDist = data[stateInd].subRegions.length;
      console.log(stateInd)

      for (let dist = 0; dist < numDist; dist++) {

        console.log(dist)

        let perItemRows = this.renderItem(data[stateInd].subRegions[dist]);

        allItemRows = allItemRows.concat(perItemRows);

        // console.log(perItemRows);

        // allItemRows = allItemRows.concat(perItemRows);
        return allItemRows;
      }

    }

    return (
      <tr>{allItemRows}</tr>
    );
  }
}

export default District;