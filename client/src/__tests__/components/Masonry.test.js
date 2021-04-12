import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";
import Masonry from '../../components/Masonry';
import photosJSON from '../data/photos.json';

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

it('renders an empty masonry list', async () => {
  await act(async () => {
    render(
      <Masonry
        rows={[]}
        offset={0}
        count={0}
        limit={0}
      />, container);
  });
  expect(container.querySelectorAll('.item-container').length).toBe(0);
});

it('contains a matching number of .item-container elements', async () => {
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
      <Masonry
        rows={photos}
        offset={0}
        count={photosJSON.length}
        limit={photos.length}
      />, container);
  });

  expect(container.querySelectorAll('.item-container').length).toBe(photos.length);
});