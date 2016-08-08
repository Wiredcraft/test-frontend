import * as ACTION from '../constants/ActionTypes'
import {FILTER_STATE, FILTER_DISTRICT, FILTER_TOWNSHIP} from '../constants/FilterTypes'

const initialState = {
  type: [FILTER_STATE, FILTER_DISTRICT, FILTER_TOWNSHIP],
  activeIndex: 0
}

export default function filter(state = initialState, action) {
  switch (action.type) {
    case ACTION.SET_FILTER:
      return { ...state, activeIndex: action.payload.index }
    default:
      return state
  }
}
