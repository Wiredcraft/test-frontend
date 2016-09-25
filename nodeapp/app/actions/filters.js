import * as ACTION from '../constants/ActionTypes'

export const setFilter = (eventKey) => {
  return {
    type: ACTION.SET_FILTER,
    payload: {
      index: eventKey
    }
  }
}
