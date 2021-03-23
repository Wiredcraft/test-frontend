import React, { useRef, useEffect } from "react";
import LazyImage from "components/LazyImage";
import useCancalBg from "hooks/useCancelBg";

function Card({ src, alt }) {
  const cardRef = useRef();
  useEffect(() => {
    resetSize(cardRef, src);
    return () => {};
  }, [cardRef, src]);

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
  useCancalBg(cardRef);

  return (
    <div className="card" ref={cardRef}>
      <LazyImage url={src} alt={alt} />
    </div>
  );
}

export default Card;
