import { SET_LEVEL } from '../actions'

const level = (state = 'state', action) => {
  switch (action.type) {
    case SET_LEVEL:
      return action.level
    default:
      return state
  }
}

export default level
