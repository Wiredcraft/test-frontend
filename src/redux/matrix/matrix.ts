import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Picture } from "../../utils/api";
import { RootState } from "../store";

export function pictureToMatrix(pictures: Picture[], col = 6): Picture[][] {
  const result: Picture[][] = Array.from({ length: 6 }, () => []);
  pictures.forEach((pic, picIdx) => {
    result[picIdx % col].push(pic);
  });
  return result;
}

const initialState: Picture[][] = [[]];

type MatrixAction = PayloadAction<{ pictures: Picture[]; col?: number }>;

export const matrixReducer = createSlice({
  name: "matrix",
  initialState,
  reducers: {
    refresh: (draft, action: MatrixAction) => {
      const { pictures, col } = action.payload;
      return pictureToMatrix(pictures, col);
    },
  },
});

export const { refresh } = matrixReducer.actions;

export const selectMatrix = (state: RootState) => state.matrix;

export default matrixReducer;
