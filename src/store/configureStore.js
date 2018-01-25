import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"

import rootReducer from "../reducers/reducers"

const middlewares = []
if (process.env.NODE_ENV === `development`) {
    middlewares.push(createLogger())
}

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(...middlewares)
    )
}
