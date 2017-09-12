import React from 'react'
import avatarPic from '../asset/image/1/avatar.png';

const Header = () => {
  return (
    <header className="clearfix">
      <span className="avatar">
        <img src={avatarPic} alt="avatar" />
      </span>
      Reports
      <a>Specific</a>
      <a className="active">Overall</a>
    </header>
  )
}

export default Header