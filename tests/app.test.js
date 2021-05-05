import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import App from '../src/app'

import AppProvder from '../src/providers/app'

Enzyme.configure({ adapter: new Adapter() })

beforeEach(() => {
  fetchMock.doMock()
})

describe('Masonry Layout', () => {
  it('render', () => {
    const app = mount(
      <AppProvder.Provider>
        <App />
      </AppProvder.Provider>
    )
    expect(app.find('.masonry-container').length).toBe(1)
  })
})
