import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ type, className }) => {
    const appendClassName = `${className} icon icon--${type}`;
    return <span className={appendClassName} />;
};

Icon.defaultProps = {
    className: ''
};

Icon.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Icon;
