import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import TableCell from './TableCell';

/**
 * Table component
 * @param {Array} headers
 * @param {Array} dataset
 */
const Table = ({ headers, dataset }) => (
    <section className="table">
        <div className="table__head table__row">
            <div className="table__row-wrapper">
                {headers.map(({ title, selector }) =>
                    <TableCell name={selector} key={title}>{title}</TableCell>)}
            </div>
        </div>
        <div className="table__body">
            {dataset.map(data => <TableRow data={data} headers={headers} key={`row${data.name}`} />)}
        </div>
    </section>
);

Table.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.object).isRequired,
    dataset: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Table;
