import React, { Component } from 'react'
import './main.css'
import SearchBar from './searchBar/searchBar'
import Table from './table/table'

const tableInterface = [
  {
    'name': 'Region',
    'class': 'name'
  },
  {
    'name': 'Last Input',
    'class': 'cell'
  },
  {
    'name': 'Number of forms',
    'class': 'cell'
  },
  {
    'name': 'Number of Voters',
    'class': 'cell'
  },
  {
    'name': 'Update',
    'class': 'cell'
  }

]

class Main extends Component {
  render () {
    return (
      <div className='componentBody'>
        <SearchBar />
        <div className='table'>
          {tableInterface.map((e) => {
            console.log(e)
          })}
          <a href='#' className='name' ><div>Region</div></a>
          <a href='#' className='cell' ><div>Last input</div></a>
          <a href='#' className='cell' ><div>Number of forms</div></a>
          <a href='#' className='cell' ><div>Number of Voters</div></a>
          <a href='#' className='cell' ><div>Update</div></a>
        </div>
        <Table />
      </div>
    )
  }
}

export default Main
