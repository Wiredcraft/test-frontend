import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from "axios";
import photoTypes from '../../store/photo/types';
import photoActions from '../../store/photo/actions';
import photosJSON from '../data/photos.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

describe('get photos actions', () => {
  it('creates GET_PHOTOS_SUCCESS when fetching photos has been done', () => {
    const res = {
      data: {
        photos: {
          rows: photosJSON.slice(0, 10),
          offset: 0,
          limit: 10,
          count: photosJSON.length,
        }
      },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(res));

    const expectedActions = [
      {type: photoTypes.GET_PHOTOS_PENDING, offset: 0},
      {type: photoTypes.GET_PHOTOS_SUCCESS, photos: res.data.photos}
    ];

    const store = mockStore({photo: {}});

    return store.dispatch((dispatch) => photoActions.getPhotos(dispatch, {offset: 0})).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
});