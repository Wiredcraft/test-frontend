import {combineReducers} from 'redux';
import photoReducer from './photo/reducer';

export default combineReducers({
  photo: photoReducer
})
