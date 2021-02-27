import React, { useState } from 'react'

export default function Image(props) {

  const { src } = props
  const [pulse, setPulse] = useState(true)

  const getHeight = (e) => {
    const path = src.split('?')[0]
    return path.slice(path.length - 3, path.length)
  }

	return (
		<div className={`image-wrapper ${pulse ? 'pulse' : ''}`}>
			<img
        className="image"
        alt={src}
        style={{ height: `${getHeight()}px` }}
        onLoad={() => setPulse(false)}
      />
		</div>
	)
}
