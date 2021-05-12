import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectKeyword, updateKeyword } from '../Header/headerSlice';
import { selectImages, fetchImages } from './masonrySlice';
import { ImgItem } from '../ImgItem/ImgItem'
import './Masonry.scss';

export function Masonry() {
  const keyword = useAppSelector(selectKeyword);
  const images = useAppSelector(selectImages);
  const dispatch = useAppDispatch();
  if (images && !images.length) {
    dispatch(fetchImages());
  }

  return (
    <div className="main">
      {images.filter(v => v.name.includes(keyword)).map(image => <ImgItem src={image.src} key={image._id} name={image.name}/>)}
    </div>
  );
}
