import React, { useEffect, useState } from 'react';

interface ILazyImageProps {
  src: string;
}


const LazyImage: React.FunctionComponent<ILazyImageProps> = (props) => {
  const { src } = props;
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const img = new Image();
    setLoading(true)
    img.onload = () => {
      setLoading(false)
    };
    img.onerror = () => {
      setError(true)
    };;
    img.onabort = () => {
      setError(true)
    };
    img.src = src;
  }, [])

  if (loading) {
    return <div className="img-placeholder" ></div>;
  }

  if (error) {
    return <div>error!</div>;
  }

  return <img src={src} />;
};

export default LazyImage;
