import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './component/App';
import {AppContainer} from 'react-hot-loader';
const store = createStore(reducer)

let render = app => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,  
    document.getElementById('root')
  )
}

render(App)

/*热更新*/
if (module.hot) {
  module.hot.accept('./component/App', () => {
      const NextApp = require('./component/App').default;
      render(NextApp)
  })
}
