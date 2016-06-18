import React from 'react';
import ReactDom from 'react-dom';
import Main from './containers/main';
import {Provider} from 'react-redux';
import testApp from './reducers/reducer';
import {createStore} from 'redux';
require ('./styles/Main.scss')

let store = createStore(testApp);
console.log(store.getState());
ReactDom.render(
	<Provider store = {store}>
	<Main />
	</Provider>,
	document.getElementById('root')
);
