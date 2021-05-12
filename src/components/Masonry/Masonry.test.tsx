import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { Masonry } from './Masonry';
import { mockImgs } from './masonrySlice.spec'
import { updateImages } from './masonrySlice';

test('renders columns properly', () => {
  const { getAllByTestId } = render(
    <Provider store={store}>
      <Masonry />
    </Provider>
  );
  expect(getAllByTestId('column')).toHaveLength(4); // window.innerWidth = 1024
});

test('renders images properly', () => {
  const { getAllByTestId } = render(
    <Provider store={store}>
      <Masonry />
    </Provider>
  );
  store.dispatch(updateImages(mockImgs));
  expect(getAllByTestId('image')).toHaveLength(7);
});