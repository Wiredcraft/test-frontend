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

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  function calcCols (width: number) {
    return Math.floor((width - SIDE_PADDING * 2 + GAP_WIDTH) / (COL_WIDTH + GAP_WIDTH))
  }

  const [colNum, setColNum] = useState(calcCols(window.innerWidth))

  // handle resize of window
  useEffect(() => {
    const handleResize = () => setColNum(calcCols(window.innerWidth));
    window.addEventListener('resize', throttle(handleResize, 200));
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main>
      {images
        // filter by keyword
        .filter(v => v.name.includes(keyword))
        // get height from url
        .map(v => ({ ...v, height: Number(v.src.match(/picsum\.photos\/\d+\/(\d+)/)?.[1] || 0) }))
        // find the shortest column and push
        .reduce((acc, val) => {
          const getColHeight = (col: ImgData[]): number => col.reduce((colAcc, colVal) => colAcc + (colVal.height || 0), 0);
          const minLength = Math.min(...acc.map(getColHeight));
          // push to shortest or first column
          (acc.find(col => (getColHeight(col) === minLength)) || acc[0]).push(val);
          return acc;
        }, Array.from({ length: colNum }, () => []) as ImgData[][])
        // map from masonry columns
        .map((col, idx) => <div data-testid="column" className="column" key={idx}>
          {col.map(image => <ImgItem src={image.src} key={image._id} name={image.name}/>)}
        </div>)}
    </main>
  );
}
