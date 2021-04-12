import axios from 'axios';
import {serverHost as host} from '../config'

export default {

  /**
   * Get photos
   * @function getPhotos
   * @param {object} params Object including offset(number), keyword(string)
   * @returns {array} Array of photos
   */
  getPhotos: async (params) => {
    try {
      const response = await axios.get(`${host}/api/photos`, {
        headers: {
          authorization: '',
        },
        params,
      });
      return response.data;
    } catch (err) {
      throw err;
    }
  }

}
