import React from 'react'
import { render } from '../enzyme'
import Profile from '../profile'
import Edit from '../profile/Edit'
import Login from '../profile/login'
import Register from '../profile/Register'
import { MemoryRouter } from 'react-router-dom'
import { GlobalProvider } from '../../store/global'

describe('Profile test', () => {

  it('profile renders', () => {
    render(
      <GlobalProvider>
        <MemoryRouter>
          <Profile />
        </MemoryRouter>
      </GlobalProvider>
    )
  })

  it('profile renders with edit page', () => {
    render(
      <GlobalProvider>
        <MemoryRouter>
          <Profile>
            <Edit /> 
          </Profile>
        </MemoryRouter>
      </GlobalProvider>
    )
  })

  it('profile renders with edit page', () => {
    render(
      <GlobalProvider>
        <MemoryRouter>
          <Profile>
            <Login /> 
          </Profile>
        </MemoryRouter>
      </GlobalProvider>
    )
  })

  it('profile renders with edit page', () => {
    render(
      <GlobalProvider>
        <MemoryRouter>
          <Profile>
            <Register /> 
          </Profile>
        </MemoryRouter>
      </GlobalProvider>
    )
  })

})
