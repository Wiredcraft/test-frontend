import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import TopBar from './components/TopBar';
import { PicturesProvider } from './contexts/PicturesContext';
import { WindowSizeProvier } from './contexts/WindowSizeContext';

const App = () => {
  return (
    <div className="app-wrap">
      <PicturesProvider>
        <WindowSizeProvier>
          <Router>
            <TopBar />
            <Switch>
              <Route path="/search/:term">
                <Search />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </WindowSizeProvier>
      </PicturesProvider>
    </div>
  );
};

export default App;
