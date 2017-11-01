import React from 'react';
import PropTypes from 'prop-types';
import TableCell from './TableCell';

const filterByHeaders = headers =>
    ([name]) => headers
        .map(({ selector }) => selector)
        .includes(name);

/**
 * TableRow component
 * @param {Array} data
 * @param {Array} headers
 */
const TableRow = ({ data, headers, level }) => (
    <div className={`table__row table__row--${level}`}>
        <div className="table__row-wrapper" key={`wrapper${level}`}>
            {
                Object
                    .entries(data)
                    .filter(filterByHeaders(headers))
                    .map(([name, value], index) => (
                        <TableCell name={name} key={name + value}>
                            {index === 0 && <span className={`table__icon table__icon--${data.type}`} />}
                            {value}
                        </TableCell>
                    ))
            }
        </div>
        {
            data.children && data.children.map(nestedData =>
                <TableRow data={nestedData} headers={headers} key={`row${nestedData.name}${level}`} level={level + 1} />)
        }
    </div>
);

TableRow.defaultProps = {
    level: 0
};

TableRow.propTypes = {
    level: PropTypes.number,
    data: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired,
    headers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TableRow;
