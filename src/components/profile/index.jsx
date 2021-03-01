import React, { useState, useEffect } from 'react'
import Edit from './Edit'
import Login from './Login'
import Register from './register'
import { useGlobalContext } from '../../store/global'

const Profile = () => {

  const { user, getUser } = useGlobalContext()

  // for login/registration form switching
  const [pageData, setPageData] = useState({
    mode: 'login'
  })

  const { mode } = pageData

  // switch between reg and login form
  const changeMode = (mode) => {
    setPageData(prevState => ({
      ...prevState,
      mode
    }))
  }

  return (
    <div className="profile">
      {/* If there is no user we will show the registration and login forms */}
      {!user &&
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
        </div>
      }
      {!user && mode === 'login' &&
        <Login />
      }
      {!user && mode === 'register' &&
        <Register />
      }
      {/* If we have user data we show the profile page */}
      {user &&
        <Edit />
      }
    </div>
  )
}

export default Profile
