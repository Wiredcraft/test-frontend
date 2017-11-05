import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button component
 */
const Button = ({
    type,
    children,
    onClick,
    className
}) => {
    const appendClassName = className + type ? ` button button--${type}` : ' button';
    return (
        <button className={appendClassName} onClick={onClick}>
            { children }
        </button>
    );
};

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
    onClick: PropTypes.func,
    className: PropTypes.string
};

export default Button;
