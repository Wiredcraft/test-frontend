import React, { Component } from 'react'
import logo from '../assets/logo.svg'
import './header.css'

class Header extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header items'>
          <div className='logo'>
            <img src={logo} alt='' className='logo-img' />
          </div>
          <div className='title items'>
            <p>
              Reports
            </p>
          </div>
          <div className='items right'>
            <div className='button active'>
              <a href=''>
                Overall
              </a>
            </div>
            <div className='button'>
              <a href=''>
                Specific
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
