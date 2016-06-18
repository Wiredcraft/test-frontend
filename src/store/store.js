import { createStore } from 'redux'
import testApp from '../reducers/reducer';
import {setVisibilityFilter,VisibilityFilters} from '../actions/actions';


console.log(store.getState());
// create store via reducer
let store = createStore(testApp);
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_SEARCH))

unscribe();
