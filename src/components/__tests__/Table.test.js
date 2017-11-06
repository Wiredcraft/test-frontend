/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Table from '../Table/Table';

describe('render', () => {
    const columns = [
        { title: 'Name', selector: 'name' },
        { title: 'E-mail', selector: 'email' },
        { title: 'Phone', selector: 'phone' },
    ];
    const dataset = [
        {
            name: 'name',
            email: 'email',
            phone: 'phone',
            type: 'type'
        },
        {
            name: 'name',
            email: 'email',
            phone: 'phone',
            type: 'type'
        },
        {
            name: 'name',
            email: 'email',
            phone: 'phone',
            type: 'type'
        }
    ];
    let wrapper = shallow(<Table headers={columns} dataset={dataset} />);

    test('it should render table header for each given column', () => {
        expect(wrapper.find('.table__row-wrapper').children('TableCell').length).toEqual(columns.length);
    });

    test('it should render a table row for each object in the given dataset', () => {
        expect(wrapper.find('TableRow').length).toEqual(dataset.length);
    });

    test('it should render a message if there are no results', () => {
        wrapper = shallow(<Table headers={columns} dataset={[]} />);
        expect(wrapper.find('TableRow').length).toEqual(0);
        expect(wrapper.find('.table__body').text()).toBe('There are no regions matching your search query');
    });
});

/* eslint-enable react/jsx-filename-extension */
