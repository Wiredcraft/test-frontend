import React from 'react'

import { logoContainer, logo } from './Logo.css'

import logoImg from './logo.png'

const Logo = () => (
  <div className={ logoContainer }>
    <img className={ logo } src={ logoImg } alt="logo"/>
  </div>
)

export default Logo