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
      return <th key={index}>{key}</th>
    })
  }

  render() {
    return (
      <div>
        <table className="names">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default TableHeader;