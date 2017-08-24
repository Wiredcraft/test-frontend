import React, { Component } from 'react'
import './table.css'

const data = [{
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
}]

class Table extends Component {
  render () {
    data.map((e) => {
      console.log(e)
    })
    return (<p>Hello world</p>)
  }
}

export default Table
