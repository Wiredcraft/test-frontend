import _ from 'lodash'

const baseReducer = (state = {}, action) =>
    _.set({ ...state }, action.type, action.payload)

export default baseReducer
