import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserCircle, faBell } from '@fortawesome/free-solid-svg-icons'
import Search from './Search'

export default function Header() {
	return (
		<div className="header">
      <Search />
      <Link to="/" className="header__icon">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <FontAwesomeIcon className="header__icon" icon={faBell} />
      <Link to="/profile" className="header__icon">
        <FontAwesomeIcon icon={faUserCircle} />
      </Link>
		</div>
	)
}
