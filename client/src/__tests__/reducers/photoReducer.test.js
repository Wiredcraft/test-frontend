import reducer, {initialState} from '../../store/photo/reducer';
import types from '../../store/photo/types';
import photosJSON from '../data/photos.json';

describe('photo reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });

  it('should handle GET_PHOTOS_PENDING', () => {
    // when receive initial state
    expect(
      reducer(undefined, {
        type: types.GET_PHOTOS_PENDING,
        offset: 0
      })
    ).toEqual({...initialState, getPhotosStatus: 'pending'});

    // when receive new state
    const stateReceived = {
      photos: {
        rows: photosJSON.slice(0, 10),
        offset: 0,
        limit: 10,
        count: photosJSON.length,
      },
      getPhotosStatus: 'success'
    };

    expect(
      reducer(stateReceived, {
        type: types.GET_PHOTOS_PENDING,
        offset: 0
      })
    ).toEqual({...stateReceived, photos: initialState.photos, getPhotosStatus: 'pending'});

    expect(
      reducer(stateReceived, {
        type: types.GET_PHOTOS_PENDING,
        offset: 10
      })
    ).toEqual({...stateReceived, getPhotosStatus: 'pending'});
  });

  it('should handle GET_PHOTOS_SUCCESS', () => {
    // when receive initial state
    const photosRes = {
      rows: photosJSON.slice(0, 10),
      offset: 0,
      limit: 10,
      count: photosJSON.length,
    };
    expect(
      reducer(initialState, {
        type: types.GET_PHOTOS_SUCCESS,
        photos: photosRes
      })
    ).toEqual({
      ...initialState,
      photos: photosRes,
      getPhotosStatus: 'success'
    });

    // when receive new state
    const stateReceived = {
      photos: {
        rows: photosJSON.slice(0, 10),
        offset: 0,
        limit: 10,
        count: photosJSON.length,
      },
      getPhotosStatus: 'success'
    };

    const photosRes2 = {
      rows: photosJSON.slice(10, 20),
      offset: 0,
      limit: 10,
      count: photosJSON.length,
    };

    expect(
      reducer(stateReceived, {
        type: types.GET_PHOTOS_SUCCESS,
        photos: photosRes2,
      })
    ).toEqual({
      ...stateReceived,
      photos: photosRes2,
      getPhotosStatus: 'success'
    });
  })

  it('should handle GET_PHOTOS_FAILURE', () => {
    expect(reducer(undefined, {
      type: types.GET_PHOTOS_FAILURE,
    })).toEqual({...initialState, getPhotosStatus: 'failure'})
  });
});