import { memo } from 'react';
import { StoreContext } from "redux-react-hook";
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { fetchPosts } from './actions';
import rootReducer from './reducers';

import Masonry from './components/Mansory/index';
import Nav from './components/Nav/index';
import './app.less';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
  )
);

store
  .dispatch(fetchPosts());

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <div className="top">
          <Nav />
        </div>
        <div className="mansory-wrap">
          <Masonry />
        </div>
      </div>
    </StoreContext.Provider>
  );
}

export default memo(App)