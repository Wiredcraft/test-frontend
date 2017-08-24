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
          {tableInterface.map(e => {
            return <a href='#' className={e.class}><div>{e.name}</div></a>
          })}
        </div>
        <Table />
      </div>
    )
  }
}

export default Main
