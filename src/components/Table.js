import React, { Component } from 'react'
import StateRow from './StateRow';

export default class Table extends Component {
  render() {
    console.log(this.props.data)
    return (
      <React.Fragment>
        {this.props.data.map(i =>  <StateRow key={i.name} stateData={i}/>)}
      </React.Fragment>
     
    )
  }
}
