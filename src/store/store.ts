import { configureStore } from '@reduxjs/toolkit'
import imageListReducer from '../features/imageListSlice'
export const imageListStore = configureStore({
    reducer: {
        imageList: imageListReducer
    }
})

export type RootState = ReturnType<typeof imageListStore.getState>
export type AppDispatch = typeof imageListStore.dispatch
