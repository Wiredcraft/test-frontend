import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ type }) =>
    <span className={`icon icon--${type}`} />;

Icon.propTypes = {
    type: PropTypes.string.isRequired
};

export default Icon;
