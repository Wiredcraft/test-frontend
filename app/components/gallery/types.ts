import { MasonryLayoutItem } from './helpers/masonry';

export interface ImageItem {
  _id: string;
  index: number;
  name: string;
  src: string;
}

export interface ImageLayoutItem extends ImageItem, MasonryLayoutItem {}
