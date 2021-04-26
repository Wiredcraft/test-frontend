import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { MasonryContext } from '../';
import IMG_BELL from '../assets/images/i-bell.svg';
import IMG_HOME from '../assets/images/i-home.svg';
import IMG_SEARCH from '../assets/images/i-search.svg';
import IMG_USER from '../assets/images/i-user.svg';

const Header = () => {
  const { keyword, updateKeyword } = useContext(MasonryContext);

  return (
    <div className='header'>
      <div className='search-input'>
        <input type='text' value={keyword} onChange={updateKeyword} />
        <img src={IMG_SEARCH} className='search-icon' />
      </div>
      <img src={IMG_HOME} className='icon' />
      <img src={IMG_BELL} className='icon' />
      <img src={IMG_USER} className='icon' />
    </div>
  );
};

export default observer(Header);
