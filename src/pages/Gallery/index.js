import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@/components/Card';
import { getImages } from '@/utils/axios/api.js';
import './index.scss';

export default function Gallery() {
  const { search } = useSelector((state) => state);
  const [images, setImages] = useState([]);
  useEffect(async () => {
    const res = await getImages();
    setImages(res.data);
  }, []);

  const displayCards = images
    .map(
      (img) =>
        img.name.includes(search) && (
          <Card key={img._id} src={img.src} alt={img.name} />
        )
    )
    .filter((i) => i !== false);

  return (
    <div className="gallery">
      {displayCards.length > 0 ? displayCards : 'sorry, no result.'}
    </div>
  );
}
