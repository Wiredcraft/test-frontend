import React from 'react';
import ReactDOM from 'react-dom';
import MasonryApp from './MasonryApp';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MasonryApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);