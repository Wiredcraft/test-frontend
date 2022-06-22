import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getContainerSize } from 'utils/layout';
import type { RootState } from 'store/store'

export interface IContainerSize {
  width: number;
  height: number;
}

interface ILayoutState {
  containerSize: IContainerSize;
  columnNum: number;
  columnHeights: number[];
}

const initialState: ILayoutState = {
  containerSize: {
    width: 0,
    height: 0
  },
  columnNum: 6,
  columnHeights: [0, 0, 0, 0, 0, 0]
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setContainerSize: (state, action: PayloadAction<IContainerSize>) => {
      state.containerSize = action.payload;
    },
    setColumnNum: (state, action: PayloadAction<number>) => {
      state.columnNum = action.payload;
      state.containerSize = getContainerSize(state.columnNum, state.columnHeights);
    },
    setColumnHeights: (state, action: PayloadAction<number[]>) => {
      state.columnHeights = action.payload;
      state.containerSize = getContainerSize(state.columnNum, state.columnHeights);
    },
  },
});

export default layoutSlice.reducer;