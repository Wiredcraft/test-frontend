import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { requestImageList, IRequestImageListArgs, LIMIT } from 'utils';

export interface IImageStyle {
  top: string;
  left: string;
  width: string;
  height: string;
}

export interface IImage {
  '_id': string;
  name: string;
  src: string;
  index: number;
};

interface ImageListState {
  list: IImage[];
  offset: number;
  hasMore: boolean;
  loading: boolean;
}

const initialState: ImageListState = {
  list: [],
  offset: 0,
  hasMore: true,
  loading: false
}

export const imageListSlice = createSlice({
  name: 'imageList',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<IImage[]>) => {
      state.list.push(...action.payload);
    },
    addOffset: (state) => {
      if (state.hasMore) {
        state.offset += LIMIT;
      }
    },
    setOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload;
    },
    resetHasMore: (state) => {
      state.hasMore = true;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchImageList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchImageList.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          const { list, hasMore } = action.payload;
          if (state.offset === 0) {
            state.list = list;
          } else {
            state.list = state.list.concat(list);
          }
          state.hasMore = hasMore;
        }
      })
      .addCase(fetchImageList.rejected, (state) => {
        state.loading = false;
      })
  }
});

export const fetchImageList = createAsyncThunk('imageList/fetchImageList', async (param: IRequestImageListArgs) => {
  return await requestImageList(param);
});

export default imageListSlice.reducer;