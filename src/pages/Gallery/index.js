import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import { getImages } from '@/utils/axios/api.js';
import './index.scss';

export default function Gallery() {
  const [images, setImages] = useState([]);
  useEffect(async () => {
    const res = await getImages();
    setImages(res.data);
  }, []);

  const displayCards = images.map((img) => (
    <Card key={img._id} src={img.src} alt={img.name} />
  ));
  return <div className="gallery">{displayCards}</div>;
}
