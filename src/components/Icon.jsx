import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ type, className }) => {
    className += ` icon icon--${type}`;
    return <span className={className} />;
}

Icon.defaultProps = {
    className: ''
};

Icon.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Icon;
