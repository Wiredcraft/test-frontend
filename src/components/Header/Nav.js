import React from 'react'

import {nav, navList, navItem, navItemChosen} from './Nav.css'

const Nav = () => (
  <nav className={nav}>
    <ul className={navList}>
      <li className={`${navItem} ${navItemChosen}`}>Overall</li>
      <li className={navItem}>Specific</li>
    </ul>
  </nav>
)

export default Nav
