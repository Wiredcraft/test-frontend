import { createStore, combineReducers } from "redux";
import reducer from "./reducer";

const reducers = combineReducers({
  filter: reducer,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
