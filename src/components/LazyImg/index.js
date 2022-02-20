import React, { useState, useRef, useEffect } from 'react';
import './index.scss';

export default function LazyImg({ url, alt }) {
  const imgRef = useRef();
  const [src, setSrc] = useState('');

  useEffect(() => {
    const io = new IntersectionObserver((enteries, observer) => {
      if (enteries[0].isIntersecting) {
        setSrc(url);
        io.disconnect();
      }
    });
    io.observe(imgRef.current);
  }, [url]);

  return <img src={src} alt={alt} ref={imgRef} className="lazyImg" />;
}
