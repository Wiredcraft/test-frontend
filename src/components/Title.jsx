import React from 'react';
import PropTypes from 'prop-types';

/**
 * Title component
 * @param {String} text
 */
const Title = ({ text }) => (text === '' ? null : <h1 className="title">{text}</h1>);

Title.propTypes = {
    text: PropTypes.string.isRequired
};

export default Title;
