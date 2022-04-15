import { ImageItem, ImageLayoutItem } from '../types';

const pattern = /\/(\d+)\/(\d+)/;

// 该计算可以在后端计算好在数据中返回
export function convertImage(imageData: ImageItem): ImageLayoutItem {
  const [, width, height] = imageData.src.match(pattern)!;

  return {
    ...imageData,
    width: Number(width),
    height: Number(height),
  }
}
