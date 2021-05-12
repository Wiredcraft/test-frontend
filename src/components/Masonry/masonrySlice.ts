import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ImgData, getImages } from '../../app/api'

export interface MasonryState {
  images: ImgData[];
  status: 'idle' | 'loading' | 'failed';
}

export const fetchImages = createAsyncThunk('masonry/getImages', async () => {
  console.log('get')
  return getImages()
});

const initialState: MasonryState = {
  images: [],
  status: 'idle'
};

export const masonrySlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        console.log('pending')
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        console.log('fulfilled')
        state.status = 'idle';
        state.images = action.payload;
      });
  },
});

export const selectImages = (state: RootState) => state.masonry.images;
export default masonrySlice.reducer;
