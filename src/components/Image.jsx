import React, { useState } from 'react'

export default function Image(props) {

  const { src, openModal } = props
  const [pulse, setPulse] = useState(true)

  const getHeight = (e) => {
    const path = src.split('?')[0]
    return path.slice(path.length - 3, path.length)
  }

  const zoomImage = () => {
    openModal('image-zoom', src)
  }

	return (
		<div className={`image-wrapper ${pulse ? 'pulse' : 'hover-scale'}`} onClick={zoomImage}>
			<img
        className="image"
        datasrc={src}
        style={{ height: `${getHeight()}px` }}
        onLoad={() => setPulse(false)}
      />
		</div>
	)
}
