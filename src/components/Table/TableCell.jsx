import React from 'react';
import PropTypes from 'prop-types';

/**
 * Table Cell component
 * @param {String} name
 * @param {Array|HTMLElement} children
 */
class TableCell extends React.PureComponent {
    static defaultProps = {
        children: null
    };

    static propTypes = {
        name: PropTypes.string.isRequired,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])
    };

    render() {
        const { name, children } = this.props;
        return (
            <div className={`table__cell table__cell--${name}`}>
                {children}
            </div>
        );
    }
}

export default TableCell;
