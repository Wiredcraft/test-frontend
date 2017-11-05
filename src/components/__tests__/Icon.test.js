/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Icon from '../Icon';

describe('render', () => {
    const wrapper = shallow(<Icon type="play" className="some__icon" />);

    test('it should add a className for the given type', () => {
        expect(wrapper.find('.icon--play').length).toEqual(1);
    });

    test('it should append any class given through the className prop', () => {
        expect(wrapper.find('.some__icon').length).toEqual(1);
    })
});

/* eslint-enable react/jsx-filename-extension */
