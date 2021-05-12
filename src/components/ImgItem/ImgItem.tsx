import React from 'react';
import './ImgItem.scss';

// Use React.memo to optimize loading perfomance
export const ImgItem = React.memo(({ src, name } : { src: string, name: string }) => {
  return (
    <div className="img-item">
      <img src={src} alt={name} />
    </div>
  );
});
