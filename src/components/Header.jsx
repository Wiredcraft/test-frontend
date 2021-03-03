import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';
import { useGlobalContext } from '../store/global';

export default function Header() {
  const { user, getUser } = useGlobalContext();
  // if user has logged in before and we have their token and id, log them in
  useEffect(() => {
    if (!user) {
      const id = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      if (id && token) {
        getUser(id, token);
      }
    }
  }, []);

  return (
    <div className="header">
      <Search />
      <Link to="/" className="header__icon">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Link to="/likes" className="header__icon">
        <FontAwesomeIcon className="header__icon" icon={faHeart} />
      </Link>
      <Link to="/profile" className="header__icon">
        {/* Show default image if there is no user data */}
        {(!user || !user.avatar) && <FontAwesomeIcon icon={faUserCircle} />}
        {/* Show uder avatar if there is data */}
        {user && user.avatar && (
          <div className="header__icon header__user-img">
            <img src={`https://d24tnhvewxeba9.cloudfront.net/${user.avatar}`} alt="user avatar" />
          </div>
        )}
      </Link>
    </div>
  );
}
