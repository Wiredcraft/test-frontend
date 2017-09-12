import { SET_KEYWORD } from '../actions'

const keyWord = (state = '', action) => {
  switch (action.type) {
    case SET_KEYWORD:
      return action.keyWord
    default:
      return state
  }
}

export default keyWord

