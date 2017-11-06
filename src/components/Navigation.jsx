import React from 'react';
import PropTypes from 'prop-types';

/**
 * render link
 * @param {String} link
 * @param {Number} index
 * @return {HTMLElement}
 */
const renderLink = (link, index) => (
    <li key={link}>
        <a className={index === 0 ? 'navigation__link navigation__link--active' : 'navigation__link'} href="/">{link}</a>
    </li>
);

/**
 * Navigation component
 * @param {Array<String>} links
 * @return {HTMLElement}
 */
const Navigation = ({ links }) => (
    <nav className="navigation">
        <ul className="navigation__links">
            {links.map(renderLink)}
        </ul>
    </nav>
);

Navigation.propTypes = {
    links: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Navigation;
