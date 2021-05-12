import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { Header } from './Header';

test('renders search', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  expect(getByTestId('search')).toBeInTheDocument();
});

test('renders 3 links', () => {
  const { getAllByTestId } = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  expect(getAllByTestId('link')).toHaveLength(3);
});
