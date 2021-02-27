import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserCircle, faBell, faSearch } from '@fortawesome/free-solid-svg-icons'
import Search from './Search'

export default function Header() {
	return (
		<div className="header">
      <Search />
      <Link to="/" className="header__icon">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <FontAwesomeIcon className="header__icon" icon={faBell} />
      <FontAwesomeIcon className="header__icon" icon={faUserCircle} />
		</div>
	)
}
