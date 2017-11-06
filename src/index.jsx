import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { store, history } from './store';

/* Import Styles */
import './styles/style.css';

import RootContainer from './containers/RootContainer';

const Root = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <RootContainer />
        </ConnectedRouter>
    </Provider>
);

/* Render */
render(Root, document.getElementById('root'));
