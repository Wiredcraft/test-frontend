import React, { Component } from 'react'
import './masonry.scss'
import User from './icons/user'
import Home from './icons/home'
import Alert from './icons/alert'
import SearchInput from './search/search'
import MasonryLayout from './masonryLayout/MasonryLayout'

class Masonry extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <SearchInput />
          <div className='panel'>
          <Home />
          <Alert />
          <User />
          </div>
        </header>
          <div style={{ height: '71px'}}></div>
          <MasonryLayout />
      </React.Fragment>
    )
  }
}

export default Masonry
