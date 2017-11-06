/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import TableCell from '../Table/TableCell';

describe('render', () => {
    const name = 'name';
    const value = 'value';
    let wrapper = shallow(<TableCell name={name} value={value} />);

    test('it should render a div with a className modifier mathchin its name', () => {
        expect(wrapper.find('.table__cell--name').length).toEqual(1);
    });

    test('it should render its children', () => {
        wrapper = shallow((
            <TableCell name={name}>
                <span />
                {value}
            </TableCell>
        ));
        expect(wrapper.text()).toBe(value);
        expect(wrapper.find('span').length).toEqual(1);
    });
});

/* eslint-enable react/jsx-filename-extension */
