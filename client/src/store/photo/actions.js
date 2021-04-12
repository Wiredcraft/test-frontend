import types from "./types";
import services from '../../services/photoServices'

const actions = {

  getPhotos: async (dispatch, payload) => {
    dispatch({type: types.GET_PHOTOS_PENDING, offset: payload.offset});
    try {
      const data = await services.getPhotos(payload);
      if (data.errors) {
        dispatch({
          type: types.GET_PHOTOS_FAILURE,
          error: data,
        })
      } else {
        dispatch({
          type: types.GET_PHOTOS_SUCCESS,
          photos: data.photos
        })
      }
    } catch (error) {
      dispatch({
        type: types.GET_PHOTOS_FAILURE,
        error: error,
      })
    }

  },

};

export default actions;