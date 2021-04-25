import {combineReducers, createStore} from 'redux';
import {ImgReducer} from './reducer';

const rootReducer = combineReducers({
    img: ImgReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(){
    const store = createStore(rootReducer);

    return store;
}