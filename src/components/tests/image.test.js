import React from 'react'
import { shallow } from '../enzyme'
import Image from '../Image'

describe('Image test', () => {
  
  it('image renders', () => {
    shallow(<Image src="https://picsum.photos/240/392?random=286" />)
  })

})