import { combineReducers } from 'redux';

export const errorReducers = (state = '', action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return action.payload;
    default:
      return state;
  }
};

export const searchReducer = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  error: errorReducers,
  search: searchReducer,
});

export default rootReducer;
