import React, { useState } from 'react';

export default function Image(props) {
  const { src, openModal } = props;
  // we animate the placeholder until the image loads
  const [pulse, setPulse] = useState(true);
  // use the path of the image to determing it's height
  // this allows us to update the masonry layout
  const getHeight = (e) => {
    const path = src.split('?')[0];
    return path.slice(path.length - 3, path.length);
  };

  const zoomImage = () => {
    openModal('image-zoom', src);
  };

  return (
    <div
      className={`image-wrapper ${pulse ? 'pulse' : 'hover-scale'}`}
      onClick={pulse ? null : zoomImage}
    >
      <img
        className="image"
        datasrc={src}
        style={{ height: `${getHeight()}px` }}
        onLoad={() => setPulse(false)}
      />
    </div>
  );
}
