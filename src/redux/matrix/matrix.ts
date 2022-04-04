import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Picture } from "../../utils/api";
import { RootState } from "../store";

export function pictureToMatrix(pictures: Picture[], col = 6): Picture[][] {
  const result: Picture[][] = Array.from({ length: col }, () => []);
  pictures.forEach((pic, picIdx) => {
    result[picIdx % col].push(pic);
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

const initialState: Picture[][] = [[]];

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
