import React, { Component } from 'react';
import District from './district';
import data from "../data"

class State extends Component {
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
  renderItem(sta) {
    const clickCallback = () => this.handleRowClick(sta.id);
    const stateRow = [
      <tr className="names" key={"row-data-" + sta.id}>
        <td> {sta.title}
          <button className="toggle-btn" onClick={clickCallback}>{sta.subRegions.length} Districts</button>
        </td>
        <td>{sta.lastIn}</td>
        <td>{sta.numForms}</td>
        <td>{sta.numVotes}</td>
        <td>{sta.update}</td>
      </tr>
    ];

    //Toggle for rendering township rows of the district if there are townships under the district
    if (sta.subRegions.length > 0 && this.state.expandedRows.includes(sta.id)) {
      for (let i = 0; i < sta.subRegions.length; i++) {
        stateRow.push(
          <District />
        )
      }
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
      <tr>{allItemRows}</tr>
    );
  }
}

export default State;