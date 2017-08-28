import { combineReducers } from 'redux'
import keyWord from './keyWord'
import level from './level'

const app = combineReducers({
  level,
  keyWord
})

export default app
