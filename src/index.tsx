import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Header } from './components/Header/Header';
import { Masonry } from './components/Masonry/Masonry';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Masonry />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);