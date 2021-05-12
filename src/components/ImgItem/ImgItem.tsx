import React from 'react';
import './ImgItem.scss';

export function ImgItem({ src, name } : { src: string, name: string }) {
  return (
    <div className="img-item">
      <img src={src} alt={name} />
    </div>
  );
}
