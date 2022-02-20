import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

LazyImg.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default function LazyImg({ url, alt }) {
  const imgRef = useRef();
  const [isLoaded, setIsLoaded] = React.useState(false);
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

  // return <img src={src} alt={alt} ref={imgRef} className="lazyImg" />;
  return (
    <React.Fragment>
      <img
        className="lazyImg thumb"
        alt={alt}
        src={url}
        ref={imgRef}
        style={{ display: isLoaded ? 'none' : 'block' }}
      />
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className="lazyImg full"
        style={{ opacity: isLoaded ? 1 : 0 }}
        alt={alt}
        src={src}
      />
    </React.Fragment>
  );
}
