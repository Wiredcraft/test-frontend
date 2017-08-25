import React, { Component } from 'react'
import Avatar from 'react-avatar'
import './table.css'
import download from '../../assets/download.png'

let data = [
  {
    name: 'Shan state',
    type: 'State',
    district: [
      {
        name: 'Aunglan',
        type: 'District',
        township: [
          {
            name: 'Loilen'
          }
        ],
        last: 123456,
        forms: 342456,
        voters: 123456,
        update: 342456
      }
    ],
    last: 123456,
    forms: 342456,
    voters: 123456,
    update: 342456
  },
  {
    name: 'Shan state',
    type: 'State',
    district: [
      {
        name: 'Aunglan',
        type: 'District',
        township: [
          {
            name: 'Loilen',
            last: 123456,
            forms: 342456,
            voters: 123456,
            update: 342456
          }
        ],
        last: 123456,
        forms: 342456,
        voters: 123456,
        update: 342456
      }
    ],
    last: 123456,
    forms: 342456,
    voters: 123456,
    update: 342456
  },
  {
    name: 'Shan state',
    type: 'State',
    district: [
      {
        name: 'Aunglan',
        type: 'District',
        township: [
          {
            name: 'Loilen',
            last: 123456,
            forms: 342456,
            voters: 123456,
            update: 342456
          }
        ],
        last: 123456,
        forms: 342456,
        voters: 123456,
        update: 342456
      }
    ],
    last: 123456,
    forms: 342456,
    voters: 123456,
    update: 342456
  },
  {
    name: 'Shan state',
    type: 'State',
    district: [
      {
        name: 'Aunglan',
        type: 'District',
        township: [
          {
            name: 'Loilen',
            last: 123456,
            forms: 342456,
            voters: 123456,
            update: 342456
          }
        ],
        last: 123456,
        forms: 342456,
        voters: 123456,
        update: 342456
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
    this.printTable = this.printTable.bind(this)
  }
  handleClick (i) {
    console.log(i)
  }
  printTable (e, i) {
    return <a className='row' id={'id:' + i}key={i} onClick={() => this.handleClick(i)}>
      <div className='item big'>
        <Avatar name={e.name} size={20} textSizeRatio={1.6} round />
        <p className={e.type.toLowerCase()}>
          {e.name}
        </p>
        <img className='download' src={download} alt='download' />
        <div className='nameLabel'>
          <bold> {e.district.length}</bold>
          {e.type}
          <span className='more'>+</span>
          <span className='less'>-</span>
        </div>
      </div>
      <div className='item small'>{e.last.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</div>
      <div className='item small'>{e.forms.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</div>
      <div className='item small'>{e.voters.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</div>
      <div className='item small'>{e.update.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</div>
    </a>
  }
  render () {
    return (
      <div>
        {data.map((e, i) => {
          return this.printTable(e, i)
        }) }
      </div>
    )
  }
}

export default Table
