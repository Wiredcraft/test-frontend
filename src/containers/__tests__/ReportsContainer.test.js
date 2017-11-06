/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReportsContainer from '../ReportsContainer';
import mockData from '../../data/report.json';

const wrapper = shallow(<ReportsContainer />);

describe('onFilter()', () => {
    test('it should set the `activeFilter` state and turn off the `filterIsOpen` state', () => {
        wrapper.setState({ filterIsOpen: true });
        wrapper.instance().onFilter('filter');
        expect(wrapper.state().activeFilter).toBe('filter');
        expect(wrapper.state().filterIsOpen).toBe(false);
    });

    test('it should not touch the state if its argument is undefined', () => {
        wrapper.instance().onFilter();
        expect(wrapper.state().activeFilter).toBe('filter');
        expect(wrapper.state().filterIsOpen).toBe(false);
    });
});

describe('onToggleFilter', () => {
    test('it should toggle the `filterIsOpen` state between false and true', () => {
        wrapper.setState({ filterIsOpen: true });
        expect(wrapper.state().filterIsOpen).toBe(true);
        wrapper.instance().onToggleFilter();
        expect(wrapper.state().filterIsOpen).toBe(false);
        wrapper.instance().onToggleFilter();
        expect(wrapper.state().filterIsOpen).toBe(true);
    });
});

describe('onSearch', () => {
    test('it should set the `searchTerm` state', () => {
        wrapper.instance().onSearch('search term');
        expect(wrapper.state().searchTerm).toBe('search term');
    });

    test('it should not set the `searchTerm` state if its argument is not defined', () => {
        wrapper.instance().onSearch();
        expect(wrapper.state().searchTerm).toBe('search term');
    });

    test('it should set the `searchTerm` state if the argument is an empty string', () => {
        wrapper.instance().onSearch('');
        expect(wrapper.state().searchTerm).toBe('');
    });
});

describe('getChildren', () => {
    test('it should return an array with items matching on of the given ids', () => {
        const children = wrapper.instance().getChildren([0, 1, 2]);
        expect(children.length).toEqual(3);
        expect(children[0]).toBe(mockData[0]);
    });

    test('it should return an empty array if there are no matching items found', () => {
        const children = wrapper.instance().getChildren([500, 600, 700]);
        expect(children.constructor).toBe(Array);
        expect(children.length).toEqual(0);
    });
});

describe('filterData', () => {
    test('it should return a filtered dataset based on the `activeFilter` and `searchTerm` state', () => {
        wrapper.setState({ activeFilter: 'state', searchTerm: 'Shan' });
        const filteredData = wrapper.instance().filterData(mockData);
        expect(filteredData.length).toEqual(1);
    });

    test('it should return an empty array if no items match', () => {
        wrapper.setState({ activeFilter: 'state', searchTerm: 'sadasfasfas' });
        const filteredData = wrapper.instance().filterData(mockData);
        expect(filteredData.length).toEqual(0);
    });

    test('it should return the full dataset when `activeFilter` and `searchTerm` are falsy', () => {
        wrapper.setState({ activeFilter: '', searchTerm: '' });
        const filteredData = wrapper.instance().filterData(mockData);
        expect(filteredData.length).toEqual(mockData.length);
    });

    test('it should only apply `activeFilter` if `searchTerm` is falsy', () => {
        wrapper.setState({ activeFilter: 'district', searchTerm: '' });
        const filteredData = wrapper.instance().filterData(mockData);
        expect(filteredData.length).toEqual(mockData.filter(({ type }) => type === 'district').length);
    });
});

/* eslint-enable react/jsx-filename-extension */
