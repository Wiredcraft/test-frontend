import React from 'react';
import PropTypes from 'prop-types';
import TableCell from './TableCell';
import Button from '../Button';
import Icon from '../Icon';

class TableRow extends React.Component {
    state = {
        showChildren: false
    };

    /**
     * toggle children
     */
    toggleChildren = () => {
        this.setState({
            ...this.state,
            showChildren: !this.state.showChildren
        });
    };


    /**
     * render cell
     * @param {Array|undefined} children
     * @param {String} type
     * @return {Function}
     */
    renderCell = (cell, index) => {
        const [name, value] = cell;
        const { children, type } = this.props.data;
        const { showChildren } = this.state;
        const isFirstCell = index === 0;
        const toggleText = type === 'state' ? 'Districts' : 'Townships';
        return (
            <TableCell name={name} key={name + value}>
                {isFirstCell && <Icon type={type} />}
                {value}
                {isFirstCell && <Button type="download" />}
                {isFirstCell && children && (
                    <Button
                        type="toggle"
                        className={showChildren && 'button--toggle-on'}
                        onClick={this.toggleChildren}>
                            <strong>{children.length}</strong> {toggleText}
                    </Button>
                )}
            </TableCell>
        );
    };

    /**
     * render
     */
    render() {
        const { data, headers, level } = this.props;
        const { showChildren } = this.state;
        const shouldRenderChildRow = data.children && showChildren;
        const headerSelectors = headers.map(({ selector }) => selector);
        const cells = Object
            .entries(data)
            .filter(([name]) => headerSelectors.includes(name));

        return cells.length ? (
            <div className={`table__row table__row--${level}`}>
                <div className="table__row-wrapper" key={`wrapper${level}`}>
                    {cells.map(this.renderCell)}
                </div>
                {
                    shouldRenderChildRow && data.children.map(nestedData =>
                        <TableRow data={nestedData} headers={headers} key={`row${nestedData.name}${level}`} level={level + 1} />)
                }
            </div>
        ) : null;
    }
}

TableRow.defaultProps = {
    level: 0
};

TableRow.propTypes = {
    level: PropTypes.number,
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        children: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string
        }))
    }).isRequired,
    headers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TableRow;
