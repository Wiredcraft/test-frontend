import React from 'react';
import Masonry from './components/Masonry';
import { PicturesProvider } from './contexts/PicturesContext';

const App = () => (
  <div className="app-wrap">
    <PicturesProvider>
      <Masonry />
    </PicturesProvider>
  </div>
);

export default App;