import React from 'react';

import './App.scss';
import Header from './components/header';
import Gallery from './components/gallery';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Gallery />
      </div>
    </div>
  );
}

export default App;
