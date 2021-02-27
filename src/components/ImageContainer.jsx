import React, { useState, useEffect } from 'react'
import Image from './Image'
import { useGlobalContext } from '../store/global'

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const lazyImage = entry.target
      lazyImage.src = entry.target.attributes.alt.value
    }
  })
})

export default function ImageContainer() {

  // subscribe to our list of photos returned from search
  const { searchResults } = useGlobalContext()

  useEffect(() => {
    const images = Array.from(document.getElementsByClassName('image'))
    images.forEach(i => {
      io.observe(i)
    })
    return () => {
      images.forEach(i => {
        io.unobserve(i)
      })
    }
  }, [searchResults])

	return (
		<div id="container" className="image-list">
      { searchResults.map(img => (
			  <Image key={img._id} src={img.src} />
      ))}
		</div>
	)
}
