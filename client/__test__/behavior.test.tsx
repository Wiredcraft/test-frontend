import '@testing-library/jest-dom';
import imageListReducer, { imageListSlice } from 'store/imageListSlice';
import { LIMIT } from 'utils';

describe('imageListSlice actions', () => {
  it('should return the initial state', () => {
    expect(imageListReducer(undefined, imageListSlice.actions.setOffset(0))).toEqual({
      list: [],
      offset: 0,
      hasMore: true,
      loading: false
    });
  });
  it('test reducer addOffset', () => {
    expect(imageListReducer(undefined, imageListSlice.actions.addOffset())).toEqual({
      list: [],
      offset: LIMIT,
      hasMore: true,
      loading: false
    });
    expect(imageListReducer({
      list: [],
      offset: 100,
      hasMore: true,
      loading: false
    }, imageListSlice.actions.addOffset())).toEqual({
      list: [],
      offset: LIMIT + 100,
      hasMore: true,
      loading: false
    });
  });
  it('test reducer setOffset', () => {
    expect(imageListReducer(undefined, imageListSlice.actions.setOffset(100))).toEqual({
      list: [],
      offset: 100,
      hasMore: true,
      loading: false
    });
  });
  it('test reducer resetHasMore', () => {
    expect(imageListReducer({
      list: [],
      offset: 100,
      hasMore: false,
      loading: false
    }, imageListSlice.actions.resetHasMore())).toEqual({
      list: [],
      offset: 100,
      hasMore: true,
      loading: false
    });
  });
});

describe('layoutSlice actions', () => {
  it('should return the initial state', () => {
    expect(imageListReducer(undefined, imageListSlice.actions.setOffset(0))).toEqual({
      list: [],
      offset: 0,
      hasMore: true,
      loading: false
    })
  });
  it('test reducer addOffset', () => {
    expect(imageListReducer(undefined, imageListSlice.actions.addOffset())).toEqual({
      list: [],
      offset: LIMIT,
      hasMore: true,
      loading: false
    })
  });
});