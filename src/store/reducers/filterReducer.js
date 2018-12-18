import { SEARCH_UPDATE } from '../actions'
const initState = {filterText: '', filterType: ''};

const inputReducer = (state = initState, action) => {
  switch(action.type) {
    case SEARCH_UPDATE:
      return {
        ...state,
        filterText: action.payload.filterText,
        filterType: action.payload.filterType
      }
    default:
      return state
  }
}

export default inputReducer