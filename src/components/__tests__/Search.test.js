/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Search from '../Search';

const callback = jest.fn();
const activeTerm = 'value';
const wrapper = shallow(<Search onChange={callback} activeTerm={activeTerm} />);

describe('render', () => {
    test('it should render a text input', () => {
        expect(wrapper.find('input[type="text"]').length).toEqual(1);
    });

    test('it should render a search icon', () => {
        expect(wrapper.find('Icon').length).toEqual(1);
        expect(wrapper.find('Icon').props().type).toBe('search');
    });

    test('it should render the active search term if available', () => {
        expect(wrapper.find('input').first().props().value).toBe(activeTerm);
    })
});

describe('onSearch', () => {
    test('it should trigerr the on seach callback 300ms after user stops typing', () => {
        wrapper.find('input[type="text"]').simulate('change', { target: { value: 'some value'} });
        expect(callback.mock.calls.length).toEqual(0);
        return new Promise(resolve => {
            setTimeout(() => resolve(callback.mock.calls.length), 300);
        }).then(called => expect(called).toEqual(1));
    });
});

/* eslint-enable react/jsx-filename-extension */
