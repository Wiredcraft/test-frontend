import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface HeaderState {
  keyword: string;
}

const initialState: HeaderState = {
  keyword: '',
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    updateKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
  },
});
export const { updateKeyword } = headerSlice.actions;
export const selectKeyword = (state: RootState) => state.header.keyword;

export default headerSlice.reducer;
