/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from '../Button';

describe('render', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button type="play" onClick={onClick}><span /> <span /></Button>);

    test('it should add a className for the given type, if provided', () => {
        expect(wrapper.find('.button--play').length).toEqual(1);
    });

    test('it should trigger the given click handler onClick', () => {
        wrapper.find('.button').simulate('click');
        expect(onClick.mock.calls.length).toEqual(1);
    });

    test('it should render its children', () => {
        expect(wrapper.find('.button').children('span').length).toEqual(2);
    });
});

/* eslint-enable react/jsx-filename-extension */
