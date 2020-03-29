import React, { Component } from 'react';

class TableHeader extends Component {
  constructor() {
    super()
    this.state = {

      //Data for header of table
      names:
        { col1: "Region", col2: "Last Input", col3: "Number of Forms", col4: "Number of Voters", col5: "Update" }
    }
  }

  //Get names of columns and render table header
  renderTableHeader() {
    let header = Object.values(this.state.names);
    return header.map((key, index) => {
      return <td key={index}>{key}</td>
    })
  }

  render() {
    return (
      <thead>
        <tr>{this.renderTableHeader()}</tr>
      </thead>
    )
  }
}

export default TableHeader;