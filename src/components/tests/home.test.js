import React from 'react';
import { render } from '../enzyme';
import './__mocks__/intersectionObserver';
import Home from '../../Home';
import { MemoryRouter } from 'react-router-dom';
import { GlobalProvider } from '../../store/global';

describe('Home test', () => {
  it('home renders', () => {
    render(
      <GlobalProvider>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </GlobalProvider>
    );
  });
});
