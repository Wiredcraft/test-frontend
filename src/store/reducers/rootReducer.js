import { combineReducers } from 'redux';
import filterReducer from './filterReducer'

const rootReducer = combineReducers({
  search: filterReducer
})

export default rootReducer