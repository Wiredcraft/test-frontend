import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {Provider} from 'react-redux'
import reducers from './reducers'
import App from './containers/app.jsx'

const reducer = combineReducers(reducers)
let loggerMiddleware = ''
let createStoreWithMiddleware = ''
let store = ''

switch (process.env.ENV_MODE) {
    default:
    case 'dev':
        loggerMiddleware = require('redux-logger')();
        createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);
        store = createStoreWithMiddleware(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    break
    case 'production':
        createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
        store = createStoreWithMiddleware(reducer);
    break
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('app')
)
