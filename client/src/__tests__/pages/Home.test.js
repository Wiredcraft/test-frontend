import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {act} from "react-dom/test-utils";
import axios from "axios";
import store from '../../store';
import Home from '../../pages/Home';
import photosJSON from "../data/photos.json";

jest.mock('axios');

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

it('contains a matching number of .item-container elements', async () => {
  const res = {
    data: {
      photos: {
        rows: photosJSON.slice(0, 10),
        offset: 0,
        limit: 10,
        count: photosJSON.length,
      }
    },
  };

  axios.get.mockImplementationOnce(() => Promise.resolve(res));

  global.Image = class {
    constructor() {
      setTimeout(() => {
        this.onload({
          target: {
            height: 100,
            width: 100,
            clientHeight: 100,
          }
        });
      });
    }
  };

  Object.defineProperty(document.body, 'clientWidth', {
    get: () => 1000
  });

  const photos = photosJSON.slice(0, 10);

  await act(async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home/>
        </BrowserRouter>
      </Provider>, container);
  });

  expect(container.querySelectorAll('.item-container').length).toBe(photos.length);
});