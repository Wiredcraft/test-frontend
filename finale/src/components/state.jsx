import React, { Component } from 'react';
import District from './district';
import data from "../data"
import dl_logo from "../img/download_icon.png"
import TableHeader from './tableHeader';

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

    //id is the callback and handleRowClick is function that accepts callback to expand or collapse a row
    const clickCallback = () => this.handleRowClick(sta.id);

    const stateRow = [
      <tr className="stateRow" key={"state-row-data-" + sta.id}>
        <td>
          <span className="capital Sta">S</span>
          <span>{sta.title}</span>
          <img className="dl_logo" src={dl_logo} alt="dl_icon" />

          {sta.subRegions.length > 0 &&
            <button
              className="toggle-btn"
              onClick={clickCallback}>{sta.subRegions.length} Districts
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
          <District district={district} />
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
      <table>
        <TableHeader />
        <tbody>
          {allItemRows}
        </tbody>
      </table>
    );
  }
}

export default State;