import axios from "axios";

export interface Picture {
  _id: string;
  index: number;
  name: string;
  src: string;
}

export function pictureToMatrix(pictures: Picture[], col = 6): Picture[][] {
  const result: Picture[][] = Array.from({ length: 6 }, () => []);
  pictures.forEach((pic, picIdx) => {
    result[picIdx % col].push(pic);
  });
  return result;
}

export default async function getPictures() {
  const { data } = await axios.get<Picture[]>("/api/pictures");
  return pictureToMatrix(data);
}
