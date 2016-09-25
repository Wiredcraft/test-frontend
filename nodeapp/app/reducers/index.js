import { combineReducers } from 'redux'
import filters from './filters'
import regions from './regions'

const rootReducer = combineReducers({
  filters,
  regions
})

export default rootReducer
