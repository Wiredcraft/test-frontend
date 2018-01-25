import { combineReducers } from "redux"
import { DO_FILTER } from "../actions/actions"

import initialList from "../store/testData"

const list = (state = [], action) => {
  switch (action.type) {
    case DO_FILTER:
      if (action.keywords === "") {
        return [].concat(initialList)
      } else {
        let visible = []
        initialList.forEach(item => {
          if (item[action.filterType].indexOf(action.keywords) > -1) {
            visible[visible.length] = item
          }
        })
        return visible
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  list
})

export default rootReducer
