/**
 * reducer
 * Sun Jul 26 01:23:08 2020
 * by xiaoT
 */

let initState = {
  images: []
}

export default function (state = initState, action) {
  let { images } = action
  switch (action.type) {
    case 'UPDATE_IMAGES':
      return Object.assign({}, state, { images })
    default:
      return state
  }
}
