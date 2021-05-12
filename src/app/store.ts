import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import headerReducer from '../components/Header/headerSlice';
import masonryReducer from '../components/Masonry/masonrySlice';

export const store = configureStore({
  reducer: {
    header: headerReducer,
    masonry: masonryReducer,
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
