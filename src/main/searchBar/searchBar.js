import React, { Component } from 'react'
import './searchBar.css'
import Dropdown from 'react-dropdown'
const options = [
  'Filter', 'State', 'District', 'Township'
]
const defaultOption = options[0]

class SearchBar extends Component {
  render () {
    return (
      <div>
        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder='Select an option' className='Dropdown' />
      </div>
    )
  }
}

export default SearchBar
