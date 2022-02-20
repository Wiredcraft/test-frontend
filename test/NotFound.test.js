import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../src/pages/NotFound/index.js';

describe('NotFound', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<NotFound />);

    expect(component).toMatchSnapshot();
  });
});
