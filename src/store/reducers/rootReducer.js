import { combineReducers } from 'redux';
import inputReducer from './inputReducer'

const rootReducer = combineReducers({
  searchText: inputReducer
})

export default rootReducer