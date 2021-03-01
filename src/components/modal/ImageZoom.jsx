import React from 'react'

export default function ImageZoom(props) {

  const { src } = props

  return (
    <div className="modal__inner zoom" onClick={(e) => e.stopPropagation()}>
      <img className="zoom__image" src={src} alt={src} />
    </div>
  )
}
