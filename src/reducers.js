import {
  REQUEST_POSTS,
  RECEIVE_POSTS
} from './actions'

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    visibleItems: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        visibleItems: action.visiblePosts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function rootReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, posts(state[action], action))
    default:
      return state
  }
}

export default rootReducer