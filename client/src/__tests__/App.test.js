import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from "react-dom/test-utils";
import App from '../App.js';

let container = null;
beforeEach(() => {
  // create a DOM element as rendering target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // clear when unmount
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders without crashing', () => {
  act(() => {
    render(<App/>, container);
  });
});
