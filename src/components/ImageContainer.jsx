import React, { useEffect } from 'react'
import Image from './Image'
import { io } from '../utils/io'

export default function ImageContainer(props) {
  const { images, openModal } = props

  useEffect(() => {
    const imageTags = Array.from(document.getElementsByClassName('image'))
    imageTags.forEach(i => {
      io.observe(i)
    })
    return () => {
      imageTags.forEach(i => {
        io.unobserve(i)
      })
    }
  }, [images])

	return (
		<div className="image-container">
      { images && images.map(img => (
			  <Image key={img._id} src={img.src} openModal={openModal} />
      ))}
		</div>
	)
}
