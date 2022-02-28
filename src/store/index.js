import { combineReducers, createStore } from "redux";
import images from "./reducer/images";

const reducers = combineReducers({
    images,
});

export default createStore(reducers);
