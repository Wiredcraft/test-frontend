import React, { useEffect } from 'react';
import Image from './Image';
import { io } from '../utils/io';

export default function ImageContainer(props) {
  const { images, openModal } = props;
  useEffect(() => {
    const imageTags = Array.from(document.getElementsByClassName('image'));
    // io is an intersection observer. it loads the images when they enter the viewport
    imageTags.forEach((i) => {
      io.observe(i);
    });
    // unobserve the images when the component unmounts
    return () => {
      imageTags.forEach((i) => {
        io.unobserve(i);
      });
    };
  }, [images]);

  return (
    <div className="image-container">
      {images &&
        images.map((img, i) => (
          <Image key={`${img._id}${i}`} src={img.src || img.image} openModal={openModal} />
        ))}
    </div>
  );
}
