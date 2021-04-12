import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from './store';
import Home from './pages/Home';

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={() => <>404</>} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
