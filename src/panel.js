import React, { Component } from 'react';
import Item from './Item'
import rawData from './data'

let arr = [];
function getData(data, level, keyWord) {
  data.forEach((item) => {
    if (item.level === level) {
      if (keyWord === '' || item.name.indexOf(keyWord) !== -1) {
        arr.push(item)
      }
    } else if (item.sub && item.sub.length > 0) {
      getData(item.sub, level, keyWord);
    }
  })
  return arr;
}

class panel extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  renderLocation() {
    arr = [];
    let data = getData(rawData, this.props.startLevel, this.props.keyWord);
    return data.map((item, i) => {
      return (
        <Item
          name={item.name}
          sub={item.sub ? item.sub : []}
          key={i + item.name}
        />
      )
    })
  }

  render() {
    return (
      <div > {this.renderLocation()} </div>
    )
  }
}

export default panel