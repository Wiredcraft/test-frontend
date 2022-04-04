import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Picture } from "../../utils/api";
import { RootState } from "../store";

export interface PictureWithMeta extends Picture {
  width: number;
  height: number;
}

export function pictureToMatrix(pictures: Picture[], col = 6) {
  const result: PictureWithMeta[][] = Array.from({ length: col }, () => []);
  pictures.forEach((pic, picIdx) => {
    const split = pic.src.replace(/\?.*/, "").split("/");
    const width = parseInt(split[3], 10);
    const height = parseInt(split[4], 10);
    result[picIdx % col].push({ ...pic, width, height });
  });
  return result;
}

function getColNum(windowWidth: number) {
  let col = 2;
  if (windowWidth >= 480) {
    col = 3;
  }
  if (windowWidth >= 768) {
    col = 4;
  }
  if (windowWidth >= 1024) {
    col = 5;
  }
  if (windowWidth >= 1280) {
    col = 6;
  }
  return col;
}

const initialState: PictureWithMeta[][] = [[]];

type MatrixAction = PayloadAction<{ pictures: Picture[]; windowWidth: number }>;

export const matrixReducer = createSlice({
  name: "matrix",
  initialState,
  reducers: {
    refresh: (draft, action: MatrixAction) => {
      const { pictures, windowWidth } = action.payload;
      return pictureToMatrix(pictures, getColNum(windowWidth));
    },
  },
});

export const { refresh } = matrixReducer.actions;

export const selectMatrix = (state: RootState) => state.matrix;

export default matrixReducer;
