import React from 'react'
import { render, shallow } from '../enzyme'
// Intersection observer not available in test environment so we mock it
import './__mocks__/intersectionObserver'
import ImageContainer from '../ImageContainer'
import json from '../../utils/images.json'


describe('ImageContainer test', () => {

  it('renders no images', () => {
    const wrapper = shallow(<ImageContainer />)
  })

  it('renders all images', () => {
    const wrapper = render(<ImageContainer images={json} />)

    expect(wrapper.find('.image')).toHaveLength(json.length)
  })
})
