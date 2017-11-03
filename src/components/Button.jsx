import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, children, onClick, className }) => (
    <button className={type ? `button button--${type} ${className}` : 'button'} onClick={onClick}>
        { children }
    </button>
);

Button.defaultProps = {
    type: false,
    children: null,
    onClick: () => null,
    className: ''
};

Button.propTypes = {
    type: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    onClick: PropTypes.func
};

export default Button;
