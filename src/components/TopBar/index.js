import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '@/assets/icons/home.svg';
import notificationIcon from '@/assets/icons/notification.svg';
import userIcon from '@/assets/icons/user.svg';
import SearchBar from '../SearchBar';
import './index.scss';

const links = [
  {
    svg: homeIcon,
    alt: 'home',
    path: '/',
  },
  {
    svg: notificationIcon,
    alt: 'notification',
    path: '/notification',
  },
  {
    svg: userIcon,
    alt: 'user',
    path: '/user',
  },
];

export default function TopBar() {
  return (
    <header className="top-bar">
      <SearchBar />
      {links.map((link) => (
        <Link to={link.path} key={link.alt} className="nav-link">
          <img src={link.svg} alt={link.alt} className="nav-link__icon"></img>
        </Link>
      ))}
    </header>
  );
}
