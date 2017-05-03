import React from 'react'

import {headerItem} from './index.css'

const Header = props => (
  <thead>
    <tr>
      {props.items.map(item => (
        <th key={item.attr} className={headerItem}>{item.name}</th>
      ))}
    </tr>
  </thead>
)

export default Header
