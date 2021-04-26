import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import masonryStore from './stores/masonry';

export const MasonryContext = createContext();

ReactDOM.render(
  <MasonryContext.Provider value={masonryStore}>
    <App />
  </MasonryContext.Provider>,
  document.getElementById('app')
);
