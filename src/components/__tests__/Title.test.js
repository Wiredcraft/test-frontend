/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Title from '../Title';

describe('render', () => {
    let wrapper = shallow(<Title text="A title" />);

    test('it should render a h1 element', () => {
        expect(wrapper.find('h1').length).toEqual(1);
    });

    test('it should render the given text', () => {
        expect(wrapper.find('h1').text()).toBe('A title');
    });

    test('it should no render a h1 element if the given string is empty', () => {
        wrapper = shallow(<Title text="" />);
        expect(wrapper.html()).toBe(null);
    });
});

/* eslint-enable react/jsx-filename-extension */
