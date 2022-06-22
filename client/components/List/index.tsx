import React, { useLayoutEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { getStyledImgListAndColumnHeights } from 'utils';
import { IImage } from 'store/imageListSlice';
import { layoutSlice } from 'store/layoutSlice';
import Image from './image';
import './index.less';

interface IImageStyle {
  top: string;
  left: string;
  width: string;
  height: string;
}

export interface IStyledImage extends IImage {
  style: IImageStyle;
}

export default function List(): React.ReactElement {
  const [styledList, setStyledList] = useState<IStyledImage[]>([]);
  const { containerSize, columnNum } = useAppSelector((state) => state.layout);
  const { list } = useAppSelector((state) => state.imageList);
  const dispatch = useAppDispatch();

  // calculate style of image dom, update state of styled list and column height
  useLayoutEffect(() => {
    const { newStyledList, newColumnHeights } = getStyledImgListAndColumnHeights(list, columnNum);
    setStyledList(newStyledList);
    dispatch(layoutSlice.actions.setColumnHeights(newColumnHeights));
  }, [list, columnNum]);

  return (
    <div className="masonry" aria-label="masonry" style={{ width: containerSize.width, height: containerSize.height }}>
      {
        styledList.length ? styledList.map((img) => {
          return (<Image name={img.name} key={img._id} src={img.src} top={img.style.top} left={img.style.left} width={img.style.width} height={img.style.height} />);
        }) : null
      }
    </div>
  )
}