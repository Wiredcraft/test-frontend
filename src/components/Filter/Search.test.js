import React from 'react'
import {shallow} from 'enzyme'
import Search from './Search'

it('renders without crashing', () => {
  shallow(<Search />)
})

it('renders a search icon', () => {
  const wrapper = shallow(<Search />)
  expect(wrapper.find('.icon-search').length).toBe(1)
})
