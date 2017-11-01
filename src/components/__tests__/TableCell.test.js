/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import TableCell from '../Table/TableCell';

describe('render', () => {
    const name = 'name';
    const value = 'value';
    const wrapper = shallow(<TableCell name={name}>{value}</TableCell>);

    test('it should render a div with a className modifier mathchin its name', () => {
        expect(wrapper.find('.table__cell--name').length).toEqual(1);
    });

    test('it should render the value inside the cell', () => {
        expect(wrapper.text()).toBe(value);
    });
});

/* eslint-enable react/jsx-filename-extension */
