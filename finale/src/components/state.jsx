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
  renderItem(item) {
    const clickCallback = () => this.handleRowClick(item.id);
    const itemRows = [
      <tr className="names" key={"row-data-" + item.id}>
        <td> {item.title}
          <button className="toggle-btn" onClick={clickCallback}>{item.subRegions.length} Districts</button>
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
          <District />
        )
      }
    }
    return itemRows;
  }

  render() {
    let allItemRows = [];

    data.forEach(item => {
      const perItemRows = this.renderItem(item);
      allItemRows = allItemRows.concat(perItemRows);
    });

    return (
      <tr>{allItemRows}</tr>
    );
  }
}

export default State;