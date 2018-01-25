import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

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
            <Route exact path="/" component={PageAll} />
            <Route exact path="/spec" component={PageSpec} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
