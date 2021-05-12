import request from '../utils/request'

export interface ImageData {
  _id: string
  index: number
  name: string
  src: string
}

export function getImages() {
  return new Promise<ImageData[]>((resolve) =>
    request('http://127.0.0.1:8080/data.json').then(res => resolve(res))
  );
}