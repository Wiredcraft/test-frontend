import React from 'react'
import Header from '../components/Header'

export default function Wrapper(props) {
  return (
    <div className="wrapper">
      <Header />
      {props.children}
    </div>
  )
}
