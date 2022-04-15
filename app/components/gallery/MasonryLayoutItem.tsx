import React from 'react';
import { ImageLayoutItem } from './types';
import { MasonryLayoutComputedItem } from './helpers/masonry';
import LazyImage from './LazyImage';

export type ImageMasonryLayoutComputedItem = ImageLayoutItem & MasonryLayoutComputedItem;

export function GalleryMasonryLayoutItem(props: { item: ImageMasonryLayoutComputedItem }) {
  const { item } = props;
  const { x, y, width, height } = item
  return (
    <div
      key={item._id}
      className="gallery-item-container"
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        transform: `translateX(${x}px) translateY(${y}px)`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div className="gallery-item">
        <LazyImage src={item.src} />
      </div>
    </div>
  );
}


export default GalleryMasonryLayoutItem