/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Navigation from '../Navigation';

describe('render', () => {
    const items = ['home', 'users', 'news'];
    const wrapper = shallow(<Navigation links={items} />);

    test('it should render a `li` element for each given item', () => {
        expect(wrapper.find('li').length).toEqual(items.length);
    });

    test('it should render each item`s string inside the `li` elements', () => {
        expect(wrapper.find('li').first().text()).toBe(items[0]);
    });
});

/* eslint-enable react/jsx-filename-extension */
