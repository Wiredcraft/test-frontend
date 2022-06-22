import React from 'react'
import { createRoot } from 'react-dom/client';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from './App';

export const history = createBrowserHistory({ window });

let rootElement = document.getElementById('root');

if (!rootElement) {
  // for jest test
  rootElement = document.createElement('div');
}

const root = createRoot(rootElement as Element);

const renderApp = (Component: any) => {
  root.render(
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Component />
      </HistoryRouter>
    </Provider>
  );
}
document.addEventListener('DOMContentLoaded', () => {
  renderApp(App);
})