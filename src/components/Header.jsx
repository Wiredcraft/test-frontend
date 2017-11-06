import React from 'react';
import PropTypes from 'prop-types';

/**
 * Header component
 * @param {Array<HTMLElement>|HTMLElement} children
 */
const Header = ({ logo, children }) => (
    <header className="app-header">
        <div className="app-header__logo">
            <img src={logo} width="32" alt="App logo" />
        </div>
        <div className="app-header__content">
            {children}
        </div>
    </header>
);

Header.propTypes = {
    logo: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

Header.defaultProps = {
    children: null
};

export default Header;
