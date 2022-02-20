import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

export default createStore(rootReducer, composeWithDevTools(applyMiddleware()));
