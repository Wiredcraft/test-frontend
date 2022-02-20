import React from 'react';
import Card from '@/components/Card';
import imgs from '../../../server/data.json';
import './index.scss';

export default function Gallery() {
  const displayCards = imgs.map((img) => (
    <Card key={img._id} src={img.src} alt={img.name} />
  ));
  return <div className="gallery">{displayCards}</div>;
}
