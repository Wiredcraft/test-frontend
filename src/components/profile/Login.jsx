import React, { useState } from 'react'
import { isEmail } from '../../utils'
import { useGlobalContext } from '../../store/global'

export default function Login() {

  const { login } = useGlobalContext()

  const [pageData, setPageData] = useState({ 
    emailErr: false,
    pwErr: false,
    validEmail: false,
    validPw: false
  })

  const { emailErr, pwErr } = pageData

  // validate the form, make sure both fields
  // are filled, and the email is a valid email
  // otherwise we show errors
  const validateForm = (e) => {
    e.preventDefault()
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    let validEmail = true
    let validPassword = true
    if (!email.value || !isEmail(email.value)) {
      validEmail = false
    }
    if (!password.value) {
      validPassword = false
    }
    if (validEmail && validPassword) {
      login(email.value, password.value)
      email.value = ''
      password.value = ''
    } else {
      setPageData(prevState => ({
        ...prevState,
        emailErr: !validEmail,
        pwErr: !validPassword
      }))
    }
  }

  // when user starts typing we remove errors
  // from the form
  const removeErrors = (e) => {
    if (emailErr || pwErr) {
      setPageData(prevState => ({
        ...prevState,
        emailErr: false,
        pwErr: false
      }))
    }
    e.preventDefault()
  }

  return (
    <div className="form" onChange={removeErrors}>
      <div className="form-field">
        <label htmlFor="email">
          Email
        </label>
        <input id="email" name="email" className={`form-field__input ${emailErr ? 'form-field__input--error' : ''}`} type="text"></input>
      </div>
      <div className="form-field">
        <label htmlFor="password">
          Password
        </label>
        <input id="password" name="password" className={`form-field__input ${pwErr ? 'form-field__input--error' : ''}`} type="text"></input>
      </div>
      <button type="button" onClick={validateForm}>Login</button>
    </div>
  )
}
