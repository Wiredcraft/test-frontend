import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../models/store';
import { fetchImageData, FetchImagePayload } from './api';
import { ImageItem, ImageLayoutItem } from './types';
import { convertImage } from './helpers/convertImage';
import { masonryLayout } from './helpers/masonry';
import { ImageMasonryLayoutComputedItem } from './MasonryLayoutItem';

export interface GalleryState {
    keywords: string;
    data: Array<ImageMasonryLayoutComputedItem>;
    status: 'loading' | 'nomore' | 'init' | 'error' | 'searching';
    offset: number;
    limit: number;
}

const initialState: GalleryState = {
    keywords: '',
    data: [],
    status: 'init',
    offset: 0,
    limit: 10,
};

export const fetchImageAsync = createAsyncThunk(
    'gallery/fetch',
    async (args: FetchImagePayload) => {
        const res = await fetchImageData(args);
        const json: ImageItem[] = await res.json();
        return json.map(convertImage);
    }
);

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        setPageSize: (state, action) => {
            state.limit = action.payload;
        },
        onSearch: (state, action) => {
            state.data = [];
            state.offset = 0;
            state.keywords = action.payload;
            if (state.status === 'nomore') {
                state.status = 'init'
            }
            masonryLayout.reset(); // resetmasonry视图
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchImageAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchImageAsync.rejected, (state) => {
                state.status = 'error';
            })
            .addCase(fetchImageAsync.fulfilled, (state, action) => {
                const data = action.payload;
                const dataCount = data.length;
                const layoutData = data.map((item: ImageLayoutItem) => {
                    const layoutItem = masonryLayout.addingItem(item);
                    return {
                        ...item,
                        ...layoutItem
                    };
                })
                state.offset = state.offset + dataCount;
                state.data = state.data.concat(layoutData)
                if (dataCount < state.limit) {
                    state.status = 'nomore'
                } else {
                    state.status = 'init';
                }

            });
    },
});
export const { onSearch, setPageSize } = gallerySlice.actions;

export const selectStatus = (state: RootState) => state.gallery.status;
export const selectData = (state: RootState) => state.gallery.data;
export const selectKeywords = (state: RootState) => state.gallery.keywords;
export const selectOffset = (state: RootState) => state.gallery.offset;
export const selectLimit = (state: RootState) => state.gallery.limit;

// 加载数据：初始和翻页，offset、limit、keywords都是已有的
export const loadData = () => (dispatch: any, getState: any) => {
    const status = selectStatus(getState());
    if (status === 'loading' || status === 'nomore') {
        return;
    }
    const offset = selectOffset(getState());
    const limit = selectLimit(getState())
    const keywords = selectKeywords(getState())
    dispatch(fetchImageAsync({ offset, limit, keywords }));
};

export default gallerySlice.reducer;
