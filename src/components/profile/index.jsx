import React, { useState } from 'react'
import { withRouter } from 'react-router'
import Login from './Login'
import Register from './register'

const Profile = () => {

  const [pageData, setPageData] = useState({
    mode: 'login'
  })

  const { mode } = pageData

  const changeMode = (mode) => {
    setPageData(prevState => ({
      ...prevState,
      mode
    }))
  }

  return (
    <div className="profile">
      <div className="profile-switcher">
        <div 
          className={`profile-switcher__item ${mode === 'login' ? 'profile-switcher__item--selected' : ''}`}
          onClick={() => changeMode('login')}
        >
          Login
        </div>
        <div 
          className={`profile-switcher__item ${mode === 'register' ? 'profile-switcher__item--selected' : ''}`}
          onClick={() => changeMode('register')}
        >
          Register
        </div>
        <div
          className={`profile-switcher__item ${mode === 'profile' ? 'profile-switcher__item--selected' : ''}`}
          onClick={() => changeMode('profile')}
        >
          Profile
        </div>
        <div
          className={`profile-switcher__item ${mode === 'edit' ? 'profile-switcher__item--selected' : ''}`}
          onClick={() => changeMode('edit')}
        >
          Edit
        </div>
      </div>
      {mode === 'login' &&
        <Login />
      }
      {mode === 'register' &&
        <Register />
      }
    </div>
  )
}

export default withRouter(Profile)
