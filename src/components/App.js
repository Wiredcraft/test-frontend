import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from "./Header"
import PageAll from "../containers/PageAll"
import PageSpec from "./PageSpec"

import "./css/App.css"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <div className="body">
            <Switch>
              <Route exact path="/" component={PageAll} />
              <Route path="/spec" component={PageSpec} />

              <Route path="/" component={PageAll} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
