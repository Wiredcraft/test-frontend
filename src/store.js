import _ from 'lodash'
import { createStore, applyMiddleware } from 'redux'

import ACTIONS from 'constant/url.yml'
import request from 'common/api'
import reducers from './reducers'

const dispatchLiteMiddleware = store => next => async (type, payload = {}, method) => {
    const url = _.get(ACTIONS, type)
    if (url) {
        const resp = await request(url, payload, method)
        next({ type, payload: resp })
        return resp
    }

    return next({ type, payload })
}

const store = createStore(
    // combineReducers(reducers),
    reducers,
    {},
    applyMiddleware(dispatchLiteMiddleware),
)

export default store
