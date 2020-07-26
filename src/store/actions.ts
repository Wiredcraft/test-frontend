/**
 * app store actions
 * Sun Jul 26 01:36:24 2020
 * by xiaoT
 */
import { UPDATE_IMAGES, FILTER_IMAGES } from './actionTypes'

/**
 * update images
 * @type {array}
 */
export const updateImages = (images: []): {type: string; images: []} => {
  return {
    type: UPDATE_IMAGES,
    images
  }
}

/**
 * search filter images 
 * @type {[type]}
 */
export const filterImages = (filterKey: string): {type: string; filterKey: string} => {
  return {
    type: FILTER_IMAGES,
    filterKey
  }
}
