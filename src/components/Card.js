import React, { useRef, useEffect } from "react";
import useCancalBg from "hooks/useCancelBg";

function Card({ src, alt }) {
  const ref = useRef();
  useEffect(() => {
    resetSize(ref, src);
    return () => {};
  }, [src]);

  // add grey backgroud to the images as placeholder
  const resetSize = (ref, url) => {
    const newWidth = ref.current.offsetWidth;
    const originalWidth = 240;
    const originalHeight = parseInt(url.split("240/")[1].split("?random")[0]);
    const newHeight = (originalHeight * newWidth) / originalWidth;
    ref.current.style.width = newWidth + "px";
    ref.current.style.height = newHeight + "px";
  };

  // cancel the grey background when resizing the window
  useCancalBg(ref);

  return (
    <div className="card-container" ref={ref}>
      <img src={src} alt={alt} className="card" />
    </div>
  );
}

export default Card;
