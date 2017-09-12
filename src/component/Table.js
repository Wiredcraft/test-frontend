import React from 'react'
import VisiblePanel from '../containers/VisiblePanel'

const Table = () => {
  return (
    <div className="table">
      <div className="table-header clearfix">
        <div>Region</div>
        <div>Last input</div>
        <div>Number of forms</div>
        <div>Number of Voters</div>
        <div>Update</div>
      </div>
      <VisiblePanel />
    </div>
  )
}
export default Table