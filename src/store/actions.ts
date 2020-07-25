/**
 * app store actions
 * Sun Jul 26 01:36:24 2020
 * by xiaoT
 */
import { UPDATE_IMAGES } from './actionTypes'

export const updateImages = (images: []): {type: string; images: []} => {
  return {
    type: UPDATE_IMAGES,
    images
  }
}
