import React from 'react'
import {shallow} from 'enzyme'
import Header from './index'

it('renders without crashing', () => {
  shallow(<Header />)
})
