import axios from 'axios';
import photosJSON from '../data/photos.json';
import services from '../../services/photoServices';

const getPhotos = services.getPhotos;

jest.mock('axios');

describe('getPhotos', () => {
  it('fetches successfully data from getPhotos API', async () => {
    const params = {
      offset: 0,
      keyword: ''
    };

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

    await expect(getPhotos(params)).resolves.toEqual(res.data);
  });

  it('fetches erroneously data from getPhotos API', async () => {
    const params = {
      offset: 0,
      keyword: ''
    };

    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    await expect(getPhotos(params)).rejects.toThrow(errorMessage);
  });
});