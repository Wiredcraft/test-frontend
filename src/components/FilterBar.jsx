import React from 'react';
import PropTypes from 'prop-types';

const FilterBar = ({ children }) => (
    <div className="filter-bar">
        {children}
    </div>
);

FilterBar.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default FilterBar;
