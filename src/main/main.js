import React, { Component } from 'react'
import './main.css'
import SearchBar from './searchBar/searchBar'
import Table from './table/table'

class Main extends Component {
  render () {
    return (
      <div className='componentBody'>
        <SearchBar />
        <Table />
      </div>
    )
  }
}

export default Main
