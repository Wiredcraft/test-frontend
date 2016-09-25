import * as ACTION from '../constants/ActionTypes'
import {FILTER_STATE, FILTER_DISTRICT, FILTER_TOWNSHIP} from '../constants/FilterTypes'

const initialState = {
  type: [FILTER_STATE, FILTER_DISTRICT, FILTER_TOWNSHIP],
  activeIndex: 0
}

export default function filter(state = initialState, action) {
  switch (action.type) {
    case ACTION.SET_FILTER:
      if (action.payload.index >= 0 && action.payload.index < state.type.length) {
        return { ...state, activeIndex: action.payload.index }
      } else {
        return state
      }
    default:
      return state
  }
}
