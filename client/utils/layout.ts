/**
 * util functions of layout
 */
import { IImage, IImageStyle } from 'store/imageListSlice';
import { IContainerSize } from 'store/layoutSlice';
import { IMG_WIDTH_WITH_PADDING, IMG_PADDING_BOTTOM } from 'utils';
import { IStyledImage } from '../components/list';

const MatchHeightReg = /\/[0-9]+/g;
// get img height from url
const getImgHeight = (src: string): number => {
  try {
    const matchRes = src.match(MatchHeightReg);
    if (!matchRes) {
      return 0;
    }
    const [width, height] = matchRes;
    const widthNum = parseInt(width.replace(/\//, ''));
    const heightNum = parseInt(height.replace(/\//, ''));
    if (isNaN(widthNum) || isNaN(heightNum)) {
      return 0;
    }
    return heightNum;
  } catch (err) {
    return 0;
  }
}

// calculate column number by innerWidth attribute on window
export const calculateColumnNum = (): number => {
  const { innerWidth } = window;

  if (innerWidth < 800) {
    return 2;
  } else if (innerWidth > 800 && innerWidth < 1000){
    return 3;
  } else if (innerWidth > 1000 && innerWidth < 1400) {
    return 4;
  } else if (innerWidth > 1400 && innerWidth < 1600) {
    return 5;
  } else {
    return 6;
  }
}

export const getContainerSize = (columnNum: number, columnHeights: number[]): IContainerSize => {
  return { width: columnNum * IMG_WIDTH_WITH_PADDING, height: Math.max(...columnHeights) }
}

export const shouldLoadMore = (): boolean => {
  const scrollY = document.documentElement.scrollTop || document.body.scrollTop;
  const masonry = document.querySelector('.masonry');
  if (masonry === null) {
    return false;
  }
  return (scrollY + window.innerHeight) > masonry.clientHeight;
}

/**
 * 
 * @param image some image
 * @param minColumnHeight add the image to the column with the minimum height
 * @param columnIndex the index of the column with minimum height
 */
const getImageStyle = (image: IImage, minColumnHeight: number, columnIndex: number): IImageStyle => {
  return {
    width: `${IMG_WIDTH_WITH_PADDING}px`,
    height: `${getImgHeight(image.src) + IMG_PADDING_BOTTOM}px`,
    top: `${minColumnHeight}px`,
    left: `${columnIndex * (IMG_WIDTH_WITH_PADDING)}px`
  }
}

interface IAdjustColumnHeightsReturn {
  heights: number[];
  adjustColumnIndex: number;
}

/**
 * get height of columns after add image to the column with minimum height
 * @param columnHeights height array of column
 * @param addImageHeight image height
 */
const adjustColumnHeights = (columnHeights: number[], addImageHeight: number): IAdjustColumnHeightsReturn => {
  const minColumnHeight = Math.min(...columnHeights);
  const adjustColumnIndex = columnHeights.findIndex((h) => h === minColumnHeight);
  const heights = [...columnHeights];
  heights[adjustColumnIndex] += addImageHeight + IMG_PADDING_BOTTOM;
  return {
    heights,
    adjustColumnIndex
  }
}

interface IGetStyledImgListRes {
  newStyledList: IStyledImage[];
  newColumnHeights: number[];
}

/**
 * get image list with position style and current column height in document
 * 
 * @param list image list without position style
 * @param columnHeightNum 
 * 
 * @returns
 * newStyledList: image list with position style
 * columnHeightNum: columnHeights after add image to the document
 */
export const getStyledImgListAndColumnHeights = (list: IImage[], columnHeightNum: number[] | number): IGetStyledImgListRes => {
  let columnHeights = typeof columnHeightNum === 'number' ? new Array(columnHeightNum).fill(0) : [...columnHeightNum];

  const newStyledList = list.map((image) => {
    const { heights, adjustColumnIndex } = adjustColumnHeights(columnHeights, getImgHeight(image.src));
    const styledImage = Object.assign({}, { ...image }, { style: getImageStyle(image, Math.min(...columnHeights), adjustColumnIndex) });
    columnHeights = heights;
    return styledImage;
  });

  return {
    newStyledList,
    newColumnHeights: columnHeights
  }
}