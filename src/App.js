import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Data from './pages/Overall';
import Home from './pages/Home';
import Specific from './pages/Specific';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/overall" component={Data} />
        <Route path="/specific" component={Specific} />

      </Switch>
    </>
  );
}

export default App;
