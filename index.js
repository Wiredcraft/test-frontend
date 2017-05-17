import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
import {Provider} from 'react-redux'
import reducers from './app/reducers'
import App from './app/containers/app.jsx'

const reducer = combineReducers(reducers)
let store = ''

switch (process.env.ENV_MODE) {
    default:
    case 'dev':
        store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
        break
    case 'production':
        store = createStore(reducer, applyMiddleware(thunkMiddleware));
        break
}

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('app'))
