import React from 'react'

import {header, title} from './index.css'

import Logo from './Logo'
import Nav from './Nav'

const Header = () => (
  <header className={header}>
    <Logo />
    <h1 className={title}>Reports</h1>
    <Nav />
  </header>
)

export default Header
