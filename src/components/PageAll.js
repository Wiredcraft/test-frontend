import React, { Component } from "react"

import TableFilter from "./TableFilter"
import TableRow from "./TableRow"

class PageAll extends Component {
  render() {
    const { list } = this.props
    const renderTableRows = () => {
      let rows = {}
      list.forEach(item => {
        if (!rows[item.State + ":s"]) {
          rows[item.State + ":s"] = {}
        }
        if (!rows[item.State + ":s"][item.District + ":d"]) {
          rows[item.State + ":s"][item.District + ":d"] = [item]
        } else {
          rows[item.State + ":s"][item.District + ":d"].push(item)
        }
      })
      return Object.keys(rows).map((key, i) => (
        <TableRow key={key} name={key} rows={rows[key]} />
      ))
    }
    return (
      <div className="table">
        <TableFilter {...this.props} />
        <div className="thead">
          <div className="row">
            <div className="name">Region</div>
            <div>Last Input</div>
            <div>Number of Forms</div>
            <div>Number of Voters</div>
            <div>Update</div>
          </div>
        </div>
        <div className="tbody">{renderTableRows()}</div>
      </div>
    )
  }
}

export default PageAll
