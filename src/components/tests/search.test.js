import React from 'react'
import { render } from '../enzyme'
import Search from '../Search'
import { MemoryRouter } from 'react-router-dom'
import { GlobalProvider } from '../../store/global'

describe('Search test', () => {
  
  it('search renders', () => {
    render(
      <GlobalProvider>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </GlobalProvider>
    )
  
  })
})