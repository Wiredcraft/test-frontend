import React, { useRef, useLayoutEffect } from 'react';
import defaultImage from './default.png';
import './index.less';

interface IImageProps {
  src: string;
  name: string;
  top: string;
  left: string;
  width: string;
  height: string;
}

const onError = (ev: React.ChangeEvent<HTMLImageElement>) => {
  ev.target.src = defaultImage;
}

function Image({ src, top, left, width, height, name }: IImageProps): React.ReactElement {
  const img = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    if (!window.IntersectionObserver || img.current === null) {
      return;
    }
    var intersectionObserver = new IntersectionObserver(function(entries) {
      if (img.current === null) {
        return;
      }
      if (entries[0].intersectionRatio <= 0) {
        return;
      }
      // todo 取色器
      if (!img.current.src) {
        img.current.src = src;
      }
    });
    intersectionObserver.observe(img.current);
  }, [])

  return (
    <div className="item" style={{ top, left, width, height }}>
      <img ref={img} aria-label={`img_${name}`} onError={onError} />
    </div>);
}  

export default React.memo(Image);
