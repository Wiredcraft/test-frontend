import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectKeyword, updateKeyword } from './headerSlice';
import IMG_NOTIFICATION from '../../assets/images/notification.svg';
import IMG_HOME from '../../assets/images/home.svg';
import IMG_SEARCH from '../../assets/images/search.svg';
import IMG_USER from '../../assets/images/user.svg';
import './Header.scss';

export function Header() {
  const keyword = useAppSelector(selectKeyword);
  const dispatch = useAppDispatch();

  return (
    <header>
      <div data-testid="search" className="search">
        <input type="text" value={keyword} onChange={e => dispatch(updateKeyword(e.target.value))} />
        <img src={IMG_SEARCH} alt="search"/>
      </div>
      <img data-testid="link" src={IMG_HOME} alt="home"/>
      <img data-testid="link" src={IMG_NOTIFICATION} alt="notification"/>
      <img data-testid="link" src={IMG_USER} alt="user"/>
    </header>
  );
}
