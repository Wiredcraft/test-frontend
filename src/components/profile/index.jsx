import React, { useState } from 'react'
import { withRouter } from 'react-router'
import Edit from './Edit'
import Login from './Login'
import Register from './register'
import { useGlobalContext } from '../../store/global'

const Profile = () => {

  const { user } = useGlobalContext()

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
          {/* <div
            className={`profile-switcher__item ${mode === 'profile' ? 'profile-switcher__item--selected' : ''}`}
            onClick={() => changeMode('profile')}
          >
            Profile
          </div> */}
        </div>
        
      }
      {!user && mode === 'login' &&
        <Login />
      }
      {!user && mode === 'register' &&
        <Register />
      }
      {user &&
        <Edit />
      }
    </div>
  )
}

export default withRouter(Profile)
