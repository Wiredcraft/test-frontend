import React from 'react'

export default function ImageZoom(props) {

  const { src } = props

  return (
    <div className="modal__inner">
      <img className="modal__image" src={src} alt={src} />
    </div>
  )
}
