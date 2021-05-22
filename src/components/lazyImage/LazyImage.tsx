import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
interface LazyImageProps {
  id: string;
  src: string;
  name: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({ id, src, name }) => {
  const [loaded, setLoaded] = useState(false);

  const refImg = useRef<any>();

  //Get the size of placeholder by the url provided
  const getPlaceholderSize = () => {
    const parts = src.match(/\d+/g);
    let imgW = 0;
    let imgH = 0;
    if (refImg) {
      imgW = refImg.current.getBoundingClientRect().width;
    }

    let ratio = 1;
    if (parts) {
      ratio = Number(parts[1]) / Number(parts[0]);
    }
    imgH = Math.floor(imgW * ratio);

    refImg.current.style.height = imgH + "px";
  };

  useEffect(() => {
    if (!refImg.current || !src) return;
    const node = refImg.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setLoaded(true);
        };
      }
    });

    observer.observe(node);

    return () => {
      observer.unobserve(node);
      observer.disconnect();
    };
  }, [src]);

  useEffect(() => {
    getPlaceholderSize();
  }, []);

  return (
    <div className="img_container" ref={refImg}>
      {loaded ? (
        <img src={src} alt={name} />
      ) : (
        <div className="placeholder"></div>
      )}
    </div>
  );
};
