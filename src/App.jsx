import { useState, memo, useCallback, useEffect } from 'react'
import { StoreContext } from "redux-react-hook";
import Masonry from './components/Mansory/index'
import Search from './components/Search/index'
import Home from './components/Icons/home';
import Notification from './components/Icons/notification'
import User from './components/Icons/user'
import './app.less'

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import { fetchPosts } from './actions'
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk'
import LazyLoad from 'react-lazyload';

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
  )
)

store
  .dispatch(fetchPosts('reactjs'))
  .then(() => console.log(store.getState())
  )

const ImageElement = memo(({ value }) => (
  <div className="image-wrap" style={{ borderRadius: '10px', margin: '5px' }}>
    <LazyLoad>
      <img src={value} style={{ width: '100%', borderRadius: '10px' }} />
    </LazyLoad>
  </div>
))

const App = () => {

  // TBD 用懒加载实现
  // const handleImages = useCallback(() => setImages(prev => [...prev, ...initialImages]), [setImages])


  const settingColumns = useCallback(() => {
    if (window.innerWidth >= 1400) return 6
    if (window.innerWidth >= 800) return 5
    if (window.innerWidth >= 500) return 4
    if (window.innerWidth >= 300) return 3
    return 1
  }, [])
  const [column, setColumn] = useState(() => settingColumns())



  useEffect(() => {
    window.addEventListener('resize', () => setColumn(() => settingColumns()))

    return window.removeEventListener('resize', () => setColumn(() => settingColumns()))
  }, [setColumn, settingColumns])

  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <div className="top" style={{ boxShadow: '0px 4px 8px rgb(103 102 102 / 25%)' }}>
          <div className="actions-center">
            <Search value={store} />
            <Home />
            <Notification />
            <User />
          </div>
        </div>
        <div style={{ padding: '5px 60px', margin: '0px 0px 0px 0px' }}>
          <Masonry
            columnCount={column}
            ChildsElement={ImageElement}
          />
        </div>
        {/* <button onClick={handleImages} style={{ cursor: 'pointer', padding: '20px', display: 'block', margin: '30px auto 80px auto' }}>Load More Image</button> */}
      </div>
    </StoreContext.Provider>
  )
}

export default memo(App)