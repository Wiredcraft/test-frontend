import { configureStore } from '@reduxjs/toolkit';
import imageListReducer from './imageListSlice';
import layoutSlice from './layoutSlice';

export const store = configureStore({
  reducer: {
    imageList: imageListReducer,
    layout: layoutSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;