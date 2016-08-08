import React, { Component, PropTypes } from 'react'
 
class TableHeader extends Component {
  render() {
    return (
      <div className="table-row header">
        <div className="table-column region">Region</div>
        <div className="table-column text-center">Last input</div>
        <div className="table-column text-center">Number of forms</div>
        <div className="table-column text-center">Number of Voters</div>
        <div className="table-column text-center">Update</div>
      </div>
    )
  }
}

export default TableHeader
