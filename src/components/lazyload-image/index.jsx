import React, { useEffect, useRef, useState } from 'react'

import './index.scss'

function ImageContainer({ src, name, placeholder, height }) {
  const ref = useRef()
  const [inView, setInView] = useState(false)
  const mountedRef = useRef(false)

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    if (!ref.current || !src) return
    const node = ref.current
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const img = new Image()
        img.src = src
        img.onload = () => {
          if (!mountedRef.current) return
          setInView(true)
        }
        // @TODO: handle onerror
      }
    })
    io.observe(node)

    return () => {
      io.unobserve(node)
      io.disconnect()
    }
  }, [src])
  return (
    <div className="image-container" ref={ref}>
      {inView ? (
        <img className="image-container__img" src={src} alt={name} />
      ) : (
        placeholder
      )}
    </div>
  )
}

export default ImageContainer
