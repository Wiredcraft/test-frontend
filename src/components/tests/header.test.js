import React from 'react';
import { render } from '../enzyme';
import Header from '../Header';
import { MemoryRouter } from 'react-router-dom';
import { GlobalProvider } from '../../store/global';

describe('Header test', () => {
  it('header renders', () => {
    render(
      <GlobalProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>ß
      </GlobalProvider>
    );
  });
});
