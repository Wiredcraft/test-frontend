/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Header from '../Header';

describe('render', () => {
    const wrapper = shallow((
        <Header logo="logo.png">
            <div className="child" />
            <div className="child" />
        </Header>
    ));

    test('it should render at least the logo', () => {
        expect(wrapper.find('img').length).toEqual(1);
    });

    test('it should render nested element when given', () => {
        expect(wrapper.find('.child').length).toBe(2);
    });
});

/* eslint-enable react/jsx-filename-extension */
