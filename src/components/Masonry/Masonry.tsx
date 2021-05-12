import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectKeyword, updateKeyword } from '../Header/headerSlice';
import { selectImages, fetchImages } from './masonrySlice';
import { ImgItem } from '../ImgItem/ImgItem'
import { ImgData } from '../../app/api'
import './Masonry.scss';

export function Masonry() {
  const keyword = useAppSelector(selectKeyword);
  const images = useAppSelector(selectImages);
  const dispatch = useAppDispatch();
  if (images && !images.length) {
    dispatch(fetchImages());
  }

  const [colNum, setColNum] = useState(6)

  return (
    <div className="main">
      {images
        .filter(v => v.name.includes(keyword))
        .reduce((acc, val, idx, arr) => { // simulates lodash.chunk
          const targetColumn = Math.floor(idx / Math.ceil(arr.length / colNum))
          acc[targetColumn].push(val)
          return acc
        }, Array.from({ length: colNum }, () => []) as ImgData[][])
        .map(col => <div className="column">
          {col.map(image => <ImgItem src={image.src} key={image._id} name={image.name}/>)}
        </div>)}
    </div>
  );
}
