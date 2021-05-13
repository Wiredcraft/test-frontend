import React, { useRef, useEffect, useCallback } from 'react';
import './ImgItem.scss';

// Use React.memo to optimize loading perfomance
export const ImgItem = React.memo(({ src, name } : { src: string, name: string }) => {
  // get element boundary
  function isVisible(elem: Element) {
    let coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && windowHeight > 0;
    return topVisible || bottomVisible;
  }

  const imgRef = useRef(null as unknown as HTMLImageElement);
  const showVisible = useCallback(() => {
    if (!imgRef.current.dataset.src) {
      window.removeEventListener('scroll', showVisible);
      return;
    };
    if (isVisible(imgRef.current)) {
      imgRef.current.src = imgRef.current.dataset.src;
      imgRef.current.dataset.src = '';
    }
  }, []);

  // register a callback to update image's src when scroll into view
  useEffect(() => {
    showVisible();
    window.addEventListener('scroll', showVisible);
    return () => window.removeEventListener('scroll', showVisible);
  });
  return (
    <div data-testid="image" className="img-item">
      <img ref={imgRef} data-src={src} alt="" />
    </div>
  );
});
