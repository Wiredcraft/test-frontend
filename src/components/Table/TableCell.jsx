import React from 'react';
import PropTypes from 'prop-types';

/**
 * Table Cell component
 * @param {String} name
 * @param {Array|HTMLElement} children
 */
const TableCell = ({ name, children }) => (
    <div className={`table__cell table__cell--${name}`}>
        {children}
    </div>
);

TableCell.defaultProps = {
    children: null
};

TableCell.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default TableCell;
