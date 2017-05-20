import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
import {Provider} from 'react-redux'
import reducers from './app/reducers'
import App from './app/containers/app.jsx'

const reducer = combineReducers(reducers)
const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware)
let store = ''

switch (process.env.ENV_MODE) {
    default:
    case 'dev':
        store = createStore(
            reducer,
            compose(
                middleware,
                window.devToolsExtension ? window.devToolsExtension() : f => f
            )
        )
        break
    case 'production':
        store = createStore(reducer, applyMiddleware(thunkMiddleware))
        break
}

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('app'))
