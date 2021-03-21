import { createStore, combineReducers } from "redux";
import filterReducer from "./filterReducer";

const reducers = combineReducers({
  filter: filterReducer,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
