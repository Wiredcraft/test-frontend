import React from 'react';
import IMG_BELL from '../assets/images/i-bell.svg';
import IMG_HOME from '../assets/images/i-home.svg';
import IMG_SEARCH from '../assets/images/i-search.svg';
import IMG_USER from '../assets/images/i-user.svg';

const Header = () => {
  return (
    <div className='header'>
      <div className='search-input'>
        <input type='text' />
        <img src={IMG_SEARCH} className='search-icon' />
      </div>
      <img src={IMG_HOME} className='icon' />
      <img src={IMG_BELL} className='icon' />
      <img src={IMG_USER} className='icon' />
    </div>
  );
};

export default Header;
