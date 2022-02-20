import React, { useRef, useEffect } from 'react';
import useRemoveBg from '@/hooks/useRemoveBg.js';
import LazyImg from '../LazyImg';
import './index.scss';

function Card({ src, alt }) {
  const cardRef = useRef();

  useEffect(() => {
    resetSize(cardRef, src);
    return () => {};
  }, [cardRef, src]);

  const resetSize = (ref, url) => {
    const sizePattern = /\d+/g;
    const [originalWidth, originalHeight] = url.match(sizePattern);
    const newWidth = ref.current.offsetWidth;
    const newHeight = (originalHeight * newWidth) / originalWidth;
    ref.current.style.width = newWidth + 'px';
    ref.current.style.height = newHeight + 'px';
  };
  useRemoveBg(cardRef);

  return (
    <div className="card-container" ref={cardRef}>
      <LazyImg url={src} alt={alt} />
    </div>
  );
}

export default Card;
