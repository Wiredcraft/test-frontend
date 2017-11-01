/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import TableRow from '../Table/TableRow';

describe('render', () => {
    const headers = [
        { title: 'Name', selector: 'name' },
        { title: 'E-mail', selector: 'email' },
        { title: 'Phone', selector: 'phone' },
    ];
    const data = {
        name: 'John',
        email: 'john@gmail.com',
        phone: '0123456789',
        children: [
            {
                name: 'John',
                email: 'john@gmail.com',
                phone: '0123456789'
            }
        ]
    };
    const wrapper = shallow(<TableRow data={data} headers={headers} />);

    test('it should render a cell for each key in the given dataset that matches the table`s headers', () => {
        expect(wrapper.find('.table__row-wrapper').first().children('TableCell').length).toEqual(headers.length);
    });

    test('it should render a nested table row if the dataset contains an array of children', () => {
        expect(wrapper.find('.table__row').first().children().length).toEqual(2);
    });
});

/* eslint-enable react/jsx-filename-extension */
