/**
 * reducer
 * Sun Jul 26 01:23:08 2020
 * by xiaoT
 */

let initState = {
  images: [], // current images
  allImages: [] // cache all images
}

export default function (state = initState, action) {
  let { images, filterKey } = action
  switch (action.type) {
    case 'UPDATE_IMAGES': // update images list and cache all images
      return Object.assign({}, state, { images }, { allImages: state.allImages.concat(images) })
    case 'FILTER_IMAGES': // search filter images
      const { allImages } = state
      let newImages = []
      if (filterKey) {
        state.images.forEach(item => {
          if (item.name.indexOf(filterKey) !== -1) {
            newImages.push(item)
          }
        })
      } else {
        newImages = allImages
      }
      return Object.assign({}, state, { images: newImages })
    default:
      return state
  }
}
