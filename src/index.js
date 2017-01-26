import React from 'react';
import ReactDom from 'react-dom';
import Main from './containers/main';
import {Provider} from 'react-redux';
import testApp from './reducers/reducer';
import {createStore} from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './styles/Main.scss';

injectTapEventPlugin();

let store = createStore(testApp);
ReactDom.render(
	<Provider store = {store}>
	<Main />
	</Provider>,
	document.getElementById('root')
);
