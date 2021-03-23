import React, { useState, useRef, useEffect } from "react";

export default function LazyImage({ url, alt }) {
  const imageRef = useRef();
  const [src, setSrc] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver((enteries, observer) => {
      if (enteries[0].isIntersecting) {
        setSrc(url);
        observer.disconnect();
      }
    });
    observer.observe(imageRef.current);
  }, [url]);

  return <img src={src} alt={alt} className="image" ref={imageRef} />;
}
