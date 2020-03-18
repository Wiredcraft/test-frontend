import React, { Component } from 'react';
import data from "../data"
import Township5 from './township5';

class District5 extends Component {
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

    this.setState({ expandedRows: newExpandedRows });
  }

  //Rendering function for sta row
  renderItem(sta) {
    const clickCallback = () => this.handleRowClick(this.props.district.id);

    const itemRows = [
      <tr className="names" key={"district-row-data-" + this.props.district.id}>
        <td> {this.props.district.title}
          {this.props.district.subRegions.length > 0 &&
            <button
              className="toggle-btn"
              onClick={clickCallback}>{this.props.district.subRegions.length} Townships
              {this.state.expandedRows > 0 ? " -" : " +"}
            </button>
          }
        </td>
        <td>{this.props.district.lastIn}</td>
        <td>{this.props.district.numForms}</td>
        <td>{this.props.district.numVotes}</td>
        <td>{this.props.district.update}</td>
      </tr>
    ];

    //Toggle for rendering township rows of the sta if there are townships under the sta
    if (this.props.district.subRegions.length > 0 && this.state.expandedRows.includes(this.props.district.id)) {
      itemRows.push(
        this.props.district.subRegions.map((town) =>
          <Township5 town={town} />
        )
      )
    }
    return itemRows;
  }

  render() {
    let allItemRows = [];

    data.forEach(sta => {
      allItemRows = this.renderItem(sta);
    });

    return (
      <tbody>
        {allItemRows}
      </tbody>
    );
  }
}

export default District5;