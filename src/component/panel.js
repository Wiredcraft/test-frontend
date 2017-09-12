import React from 'react'
import Item from './Item'
import rawData from '../data'

let arr = [];
function getData(data,level, keyWord) {
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

const panel = ({ level,keyWord }) => {
  arr = []
  let items = getData(rawData,level, keyWord).map((item, i) => {
    return <Item
      name={item.name}
      sub={item.sub ? item.sub : []}
      key={item.id}
    />
  })


  return  (
    <div >
      {
        items.length == 0 ?
        <div className="noResults">
          Your search &nbsp;
          <span>"{keyWord}"</span>&nbsp;
          did not match any &nbsp;
          <span>{level}</span>
        </div>
        :
        items
      }
    </div>
  )
}

export default panel