import React, { Component } from "react"

import { doFilter } from "../actions/actions"

import search from "./img/search.svg"

class TableFilter extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)

    this.state = { filterType: "State", keywords: "" }
  }

  handleChange(e) {
    const filter = e.target.value
    this.setState({ filterType: filter })
    if (this.state.keywords) {
      this.props.dispatch(doFilter(filter, this.state.keywords))
    }
  }

  handleSearch(e) {
    const keywords = e.target.value.trim()
    if (this.state.keywords !== keywords) {
      this.setState({ keywords: keywords })
      this.props.dispatch(doFilter(this.state.filterType, keywords))
    }
  }

  render() {
    return (
      <div className="table-filter">
        <select value={this.state.filterType} onChange={this.handleChange}>
          <option value="State">State</option>
          <option value="District">District</option>
          <option value="Town">Town</option>
        </select>
        <input
          placeholder="Search"
          value={this.state.keywords}
          onChange={this.handleSearch}
        />
        <img src={search} alt="search" />
      </div>
    )
  }
}

export default TableFilter
