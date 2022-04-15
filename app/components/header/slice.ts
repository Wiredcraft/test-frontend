import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../models/store';

export interface HeaderState {
    keywords: string;
}

const initialState: HeaderState = {
    keywords: ''
};


export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        modifyKeywords: (state, action) => {
            state.keywords = action.payload;
        }
    },
});

export const { modifyKeywords } = headerSlice.actions

export const selectKeywords = (state: RootState) => state.header.keywords;


export default headerSlice.reducer;
