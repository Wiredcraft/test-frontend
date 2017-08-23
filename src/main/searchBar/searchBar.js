import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import './searchBar.css'

const options = [
  'Filter', 'State', 'District', 'Township'
]
const defaultOption = options[0]

class SearchBar extends Component {
  render () {
    return (
      <div className='container'>
        <div className='filter'>
          <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder='Select an option' className='Dropdown' />
        </div>
        <input type='text' className='inputSearch' placeholder='Search' />
      </div>
    )
  }
}

export default SearchBar
