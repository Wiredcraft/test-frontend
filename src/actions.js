import fetch from 'cross-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json.all,
    visiblePosts: json.visible,
    receivedAt: Date.now()
  }
}

/**
 * 
 * @returns 异步请求数据
 */
export function fetchPosts() {

  // Thunk middleware 知道如何处理函数。
  // 这里把 dispatch 方法通过参数的形式传给函数，
  // 以此来让它自己也能 dispatch action。

  return function (dispatch) {

    // 首次 dispatch：更新应用的 state 来通知 API 请求发起了。

    dispatch(requestPosts())

    // thunk middleware 调用的函数可以有返回值，
    // 它会被当作 dispatch 方法的返回值传递。
    return fetch(`http://localhost:3004/data`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        // 使用 API 请求结果来更新应用的 state。

        dispatch(receivePosts({
          all: json,
          visible: json
        }))
      )
  }
}

/**
 * 
 * @param {array} json 用于过滤查找的数据源，是数组类型
 * @param {*} keyword 用于过滤查找的关键字，是字符串类型
 * @returns 
 */
export function filterPosts(json, keyword) {
  return function (dispatch) {
    let visible = []
    if (keyword?.length) {
      visible = json.filter(t => {
        return t.name === keyword
      })
    } else {
      visible = json
    }

    dispatch(receivePosts({
      all: json,
      visible: visible
    }))
  }
}