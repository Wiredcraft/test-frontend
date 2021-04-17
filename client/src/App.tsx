import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Masonry from './components/Masonry';
import SearchBar from './components/TopBar';
import { PicturesProvider } from './contexts/PicturesContext';

const App = () => (
  <div className="app-wrap">
    <PicturesProvider>
      <SearchBar />
      <Router>
        <Switch>
          <Route path="/search">
            <Masonry />
          </Route>
          <Route path="/">
            <Masonry />
          </Route>
        </Switch>
      </Router>
    </PicturesProvider>
  </div>
);

export default App;
