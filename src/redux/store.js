import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

function errorReducers(state = '', action) {
  switch (action.type) {
    case 'SET_ERROR':
      return action.payload;
    default:
      return state;
  }
}

function searchReducer(state = '', action) {
  switch (action.type) {
    case 'SEARCH':
      return action.payload;
    default:
      return state;
  }
}

const reducers = combineReducers({
  error: errorReducers,
  search: searchReducer,
});

export default createStore(reducers, composeWithDevTools(applyMiddleware()));
