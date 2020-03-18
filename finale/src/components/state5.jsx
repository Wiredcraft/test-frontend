import React, { Component } from 'react';
import District5 from './district5';
import data from "../data"

class State5 extends Component {
  constructor() {
    super();
    this.state = {
      expandedRows: []
    };
  }

  //Click handler for expanding rows
  handleRowClick(rowId) {
    const currentExpandedRows = this.state.expandedRows;
    console.log(currentExpandedRows);

    //If false that means that there is no district expanded row at the time of this click handler
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

    //If isRowCurrentlyExpanded is false state row will expand
    const newExpandedRows = isRowCurrentlyExpanded ?
      currentExpandedRows.filter(id => id !== rowId) :
      currentExpandedRows.concat(rowId);

    console.log(newExpandedRows);

    this.setState({ expandedRows: newExpandedRows });
  }

  //Rendering function for district row
  renderItem(sta) {
    const clickCallback = () => this.handleRowClick(sta.id);
    const stateRow = [
      <tr className="names" key={"state-row-data-" + sta.id}>
        <td> {sta.title}
          {sta.subRegions.length > 0 &&
            <button
              className="toggle-btn"
              onClick={clickCallback}>{sta.subRegions.length} District
              {this.state.expandedRows > 0 ? " -" : " +"}
            </button>
          }
        </td>
        <td>{sta.lastIn}</td>
        <td>{sta.numForms}</td>
        <td>{sta.numVotes}</td>
        <td>{sta.update}</td>
      </tr>
    ];

    //Toggle for rendering township rows of the district if there are townships under the district
    if (sta.subRegions.length > 0 && this.state.expandedRows.includes(sta.id)) {
      stateRow.push(
        sta.subRegions.map((district) =>
          <District5 district={district} />
        )
      )
    }
    return stateRow;
  }

  render() {
    let allItemRows = [];

    data.forEach(sta => {
      const perStateRow = this.renderItem(sta);
      allItemRows = allItemRows.concat(perStateRow);
    });

    return (
      <table>{allItemRows}</table>
    );
  }
}

export default State5;