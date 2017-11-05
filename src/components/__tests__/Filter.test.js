/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Filter from '../Filter';

const options = ['A', 'B', 'C'];
const callbackMock = jest.fn();
const filterMock = jest.fn();
const wrapper = shallow(<Filter options={options} onToggle={callbackMock} onFilter={filterMock} />);

describe('render', () => {
    test('it should render a button with the text `filter`', () => {
        expect(wrapper.html()).toContain('Filter');
    });

    test('it should not render options by default', () => {
        expect(wrapper.find('li').length).toEqual(0);
    });

    test('it should render a list of options for each item in the `options` prop when open is true', () => {
        wrapper.setProps({ isOpen: true });
        expect(wrapper.find('li').length).toEqual(options.length);
    });

    test('it should render the option text inside the li element', () => {
        expect(wrapper.find('li').first().text()).toBe(options[0]);
    });
});

describe('onToggle', () => {
    test('it should trigger the onToggle callback when user clicks on the button', () => {
        wrapper.find('Button').simulate('click');
        expect(callbackMock.mock.calls.length).toEqual(1);
    });
});

describe('onFilter', () => {
    test('it should trigger the onFilter callback when user selects a filter', () => {
        wrapper.find('li').first().simulate('click');
        expect(filterMock.mock.calls.length).toEqual(1);
    });
});



/* eslint-enable react/jsx-filename-extension */
