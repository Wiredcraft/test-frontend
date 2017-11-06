/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import TableRow from '../Table/TableRow';

const headers = [
    { title: 'Name', selector: 'name' },
    { title: 'E-mail', selector: 'email' },
    { title: 'Phone', selector: 'phone' },
];
const data = [
    {
        name: 'John',
        email: 'john@gmail.com',
        phone: '0123456789',
        type: 'state',
        children: [1]
    },
    {
        name: 'John',
        email: 'john@gmail.com',
        phone: '0123456789',
        type: 'district'
    }
];

const element = <TableRow data={data[0]} headers={headers} getChildren={() => [data[1]]} />;
const wrapper = shallow(element);

describe('render', () => {
    test('it should render a cell for each key in the given dataset that matches the table`s headers', () => {
        expect(wrapper.find('.table__row-wrapper').first().children('TableCell').length).toEqual(headers.length);
    });

    test('it should render a nested table row if the dataset contains children after user clicks on the toggle', () => {
        expect(wrapper.find('CSSTransitionGroup').first().children().length).toEqual(0);
        wrapper.setState({ showChildren: true });
        expect(wrapper.find('CSSTransitionGroup').first().children().length).toEqual(1);
    });
});

describe('renderCell()', () => {
    const cell = shallow(<div>{wrapper.instance().renderCell(['name', 'value'], 0)}</div>);
    const secondCell = shallow(<div>{wrapper.instance().renderCell(['name', 'value'], 1)}</div>);

    test('it should render a TableCell when given an array with a name and value', () => {
        expect(cell.find('TableCell').length).toEqual(1);
    });

    test('it should render the given value inside the cell', () => {
        expect(cell.find('TableCell').html()).toContain('value');
        expect(secondCell.find('TableCell').html()).toContain('value');
    });

    test('it should render an Icon in it`s first cell', () => {
        expect(cell.find('TableCell').children('Icon').length).toEqual(1);
        expect(secondCell.find('TableCell').children('Icon').length).toEqual(0);
    });

    test('it should render a download button in it`s first cell', () => {
        expect(cell.find('TableCell').children('Button').first().props().type).toBe('download');
        expect(secondCell.find('TableCell').children('Button').length).toEqual(0);
    });

    test('it should render a toggle button if the row data has a set of children', () => {
        expect(cell.find('TableCell').children('Button').last().props().type).toBe('toggle');
        expect(secondCell.find('TableCell').children('Button').length).toEqual(0);
    });
});

/* eslint-enable react/jsx-filename-extension */
