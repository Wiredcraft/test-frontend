import React, { Component } from 'react';
import Township from './township';
import data from "../data"
import dl_logo from "../img/download_icon.png"

class District extends Component {
  constructor() {
    super();
    this.state = {
      expandedRows: [],
    };
  }

  //Click handler for expanding rows
  handleRowClick(rowId) {
    const currentExpandedRows = this.state.expandedRows;

    //If false that means that district level expanded rows are not expanded when this click handler is called
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

    //If isRowCurrentlyExpanded is false state row will expand
    const newExpandedRows = isRowCurrentlyExpanded ?
      currentExpandedRows.filter(id => id !== rowId) :
      currentExpandedRows.concat(rowId);

    this.setState({ expandedRows: newExpandedRows });
  }

  //Rendering function for sta row
  renderRows(sta) {
    const { title, id, lastIn, numForms, numVotes, update, subRegions } = this.props.district;

    //id is the callback and handleRowClick is function that accepts callback to expand or collapse a row
    const clickCallback = () => this.handleRowClick(id);
    const isRowCurrentlyExpanded = this.state.expandedRows.includes(id);

    const itemRows = [
      <tr className="districtRow" key={"district-row-data-" + id}>
        <td>
          <span className="capital capitalDist">D</span>
          <span>{title}</span>
          <img className="dl_logo" src={dl_logo} alt="dl_icon" />
          {subRegions.length > 0 &&
            <button
              className="toggle-btn"
              onClick={clickCallback}>{subRegions.length} Townships
               {isRowCurrentlyExpanded ? " -" : " +"}
            </button>
          }
        </td>
        <td>{lastIn}</td>
        <td>{numForms}</td>
        <td>{numVotes}</td>
        <td>{update}</td>
      </tr>
    ];

    //Toggle for rendering township rows of the district if there are townships under the district
    if (subRegions.length > 0 && this.state.expandedRows.includes(id)) {
      itemRows.push(
        subRegions.map((town) =>
          <Township town={town} />
        )
      )
    }
    return itemRows;
  }

  render() {
    let allDistRows = [];

    data.forEach(sta => {
      allDistRows = this.renderRows(sta);
    });

    return (
      <React.Fragment>
        {allDistRows}
      </React.Fragment>
    );
  }
}

export default District;