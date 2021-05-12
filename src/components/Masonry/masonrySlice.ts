import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ImgData, getImages } from '../../app/api'

export interface MasonryState {
  images: ImgData[];
  status: 'idle' | 'loading' | 'failed';
}

export const fetchImages = createAsyncThunk('masonry/getImages', async () => {
  return getImages();
});

const initialState: MasonryState = {
  images: [],
  status: 'idle'
};

export const masonrySlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    updateImages: (state, action: PayloadAction<ImgData[]>) => {
      state.images = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'idle';
        state.images = action.payload;
      });
  },
});

export const { updateImages } = masonrySlice.actions;
export const selectImages = (state: RootState) => state.masonry.images;

export default masonrySlice.reducer;
