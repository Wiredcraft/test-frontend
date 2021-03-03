import React, { useState, useRef } from 'react'
import { isEmail } from '../../utils'
import { useGlobalContext } from '../../store/global'

export default function Register() {

  const { register } = useGlobalContext()

  const [pageData, setPageData] = useState({ 
    emailErr: false,
    pwErr: false,
    validEmail: false,
    validPw: false
  })
  
  const { emailErr, pwErr } = pageData

  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmRef = useRef(null)
  
  // validate the form, make sure both fields
  // are filled, and the email is a valid email
  // also we check that the passwords match
  // otherwise we show errors
  const validateForm = (e) => {
    e.preventDefault()
    const email = emailRef.current
    const password = passwordRef.current
    const confirm = confirmRef.current
    let validEmail = true
    let validPassword = true
    if (!email.value || !isEmail(email.value)) {
      validEmail = false
    }
    if (!password.value || (password.value !== confirm.value)) {
      validPassword = false
    }
    if (validEmail && validPassword) {
      register(email.value, password.value, confirm.value)
      password.value = ''
      email.value = ''
      confirm.value = ''
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
  const removeErrors = () => {
    if (emailErr || pwErr) {
      setPageData(prevState => ({
        ...prevState,
        emailErr: false,
        pwErr: false
      }))
    }
  }

  return (
    <form className="form" onChange={removeErrors}>
      <div className="form-field">
        <label htmlFor="email">
          Email
        </label>
        <input id="email" name="email" ref={emailRef} className={`form-field__input ${emailErr ? 'form-field__input--error' : ''}`} type="text"></input>
      </div>
      <div className="form-field">
        <label htmlFor="password">
          Password
        </label>
        <input id="password" name="password" ref={passwordRef} className={`form-field__input ${pwErr ? 'form-field__input--error' : ''}`} type="text"></input>
      </div>
      <div className="form-field">
        <label htmlFor="confirm">
          Confirm password
        </label>
        <input id="confirm" name="confirm" ref={confirmRef} className={`form-field__input ${pwErr ? 'form-field__input--error' : ''}`} type="text"></input>
      </div>
      <button type="button" onClick={validateForm}>Register</button>
    </form>
  )
}
