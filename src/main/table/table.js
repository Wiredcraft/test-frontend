import React, { Component } from 'react'
import Avatar from 'react-avatar'
import './table.css'
import download from '../../assets/download.png'

let data = [
  {
    name: 'Shan state',
    district: [
      {
        name: 'Aunglan',
        township: [
          {
            name: 'Loilen'
          }
        ]
      }
    ],
    last: 123456,
    forms: 342456,
    voters: 123456,
    update: 342456
  },
  {
    name: 'Shan state',
    district: [
      {
        name: 'Aunglan',
        township: [
          {
            name: 'Loilen'
          }
        ]
      }
    ],
    last: 123456,
    forms: 342456,
    voters: 123456,
    update: 342456
  },
  {
    name: 'Shan state',
    last: 123456,
    forms: 342456,
    voters: 123456,
    update: 342456
  },
  {
    name: 'Shan state',
    district: [
      {
        name: 'Aunglan'
      }
    ],
    last: 123456,
    forms: 342456,
    voters: 123456,
    update: 342456
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
          return <a href='' className='row' id={'id:' + i}key={i} onClick={() => this.handleClick(i)}>
            <div className='item big'>
              <Avatar name={e.name} size={20} round />
              {e.name}
              <img className='download' src={download} />
            </div>
            <div className='item small'>{e.last.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</div>
            <div className='item small'>{e.forms.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</div>
            <div className='item small'>{e.voters.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</div>
            <div className='item small'>{e.update.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</div>
          </a>
        }) }
      </div>
    )
  }
}

export default Table
