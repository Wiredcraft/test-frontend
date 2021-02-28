import React from 'react'
import Header from '../components/Header'
import Modal from '../components/Modal'

export default function Wrapper(props) {
  return (
    <div className="wrapper">
      <Header />
        {props.children}
      <Modal />
    </div>
  )
}
