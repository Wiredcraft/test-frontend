import React, { Component } from 'react'
import './main.css'
import SearchBar from './searchBar/searchBar'
import Table from './table/table'

const tableInterface = [
  {
    'name': 'Region',
    'class': 'item big'
  },
  {
    'name': 'Last Input',
    'class': 'item small'
  },
  {
    'name': 'Number of forms',
    'class': 'item small'
  },
  {
    'name': 'Number of Voters',
    'class': 'item small'
  },
  {
    'name': 'Update',
    'class': 'item small'
  }

]

class Main extends Component {
  render () {
    return (
      <div className='componentBody'>
        <SearchBar />
        <div className='row head'>
          {tableInterface.map((e, i) => {
            return <a href='#' key={i} className={e.class}><div>{e.name}</div></a>
          })}
        </div>
        <Table />
      </div>
    )
  }
}

export default Main
