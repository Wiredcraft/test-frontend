import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectKeyword } from '../Header/headerSlice';
import { selectImages, fetchImages } from './masonrySlice';
import { ImgItem } from '../ImgItem/ImgItem';
import { ImgData } from '../../app/api';
import { throttle } from '../../utils/throttle';
import './Masonry.scss';

const COL_WIDTH = 200;
const GAP_WIDTH = 16;
const SIDE_PADDING = 80;

export function Masonry() {
  const keyword = useAppSelector(selectKeyword);
  const images = useAppSelector(selectImages);
  const dispatch = useAppDispatch();
  if (images && !images.length) {
    dispatch(fetchImages());
  }

  function calcCols (width: number) {
    return Math.floor((width - SIDE_PADDING * 2) / (COL_WIDTH + GAP_WIDTH))
  }

  const [colNum, setColNum] = useState(calcCols(window.innerWidth))

  useEffect(() => {
    const handleResize = () => setColNum(calcCols(window.innerWidth));
    window.addEventListener('resize', throttle(handleResize, 200));
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="main">
      {images
        .filter(v => v.name.includes(keyword))
        .reduce((acc, val, idx, arr) => { // simulates lodash.chunk
          const targetColumn = Math.floor(idx / Math.ceil(arr.length / colNum))
          acc[targetColumn].push(val)
          return acc
        }, Array.from({ length: colNum }, () => []) as ImgData[][])
        .map((col, idx) => <div className="column" key={idx}>
          {col.map(image => <ImgItem src={image.src} key={image._id} name={image.name}/>)}
        </div>)}
    </div>
  );
}
