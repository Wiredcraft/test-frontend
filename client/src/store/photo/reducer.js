import types from './types';

export const initialState = {
  photos: {
    offset: 0,
    limit: 10,
    count: 0,
    rows: [],
  },
};

const reducer = (state = initialState, action) => {

  const {
    error,
    type,
    offset,
    photos,
  } = action;

  switch (type) {

    case types.GET_PHOTOS_PENDING:
      const params = {};
      if (offset === 0) {
        params.photos = initialState.photos;
      }
      return {
        ...state,
        ...params,
        getPhotosStatus: 'pending'
      };
    case types.GET_PHOTOS_SUCCESS:
      return {
        ...state,
        photos,
        getPhotosStatus: 'success'
      };
    case types.GET_PHOTOS_FAILURE:
      return {
        ...state,
        getPhotosStatus: 'failure',
      };

    default:
      return state;
  }
};

export default reducer;
