import React from 'react';
import { shallow } from '../enzyme';
import '../../__mocks__/intersectionObserver'
import Home from '../../Home';


describe('Home test', () => {

  it('home renders', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('.image-container')).toHaveLength(1)
  });

});
