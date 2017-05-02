import React from 'react'
import {shallow} from 'enzyme'
import Logo from './index'

it('renders without crashing', () => {
  shallow(<Logo />)
})
