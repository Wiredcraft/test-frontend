import { createStore, combineReducers } from "redux";
import queryReducer from "./queryReducer";

const reducers = combineReducers({
  query: queryReducer,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
