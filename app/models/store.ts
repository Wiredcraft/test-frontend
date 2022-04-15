import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import galleryReducer from '../components/gallery/slice';
import headerReducer from '../components/header/slice';

export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
    header: headerReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
