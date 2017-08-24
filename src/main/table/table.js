import React, { Component } from 'react'
import './table.css'

const data = [
  {
    name: 'Tanner Linsley',
    age: 26,
    friend: {
      name: 'Jason Maurer',
      age: 23
    }
  },
  {
    name: 'Francisco Briceno',
    age: 21,
    friend: {
      name: 'Jason Maurer',
      age: 23
    }
  }
]

class Table extends Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (i) {
    console.log(i)
  }
  render () {
    return (
      <div>
        {data.map((e, i) => {
          return <a className='row' key={i} onClick={() => this.handleClick(i)}>
            <div className='item big'>{e.name}</div>
            <div className='item small'>{e.age}</div>
            <div className='item small'>{e.friend.name}</div>
            <div className='item small'>{e.friend.age}</div>
            <div className='item small'>{e.age}</div>
          </a>
        }) }
      </div>
    )
  }
}

export default Table
