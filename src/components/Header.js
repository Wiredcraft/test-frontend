import React, { Component } from "react"
import { Link } from "react-router-dom"

import logo from "./img/logo.svg"

class Header extends Component {
  constructor(props) {
    super(props)
    this.changeNav = this.changeNav.bind(this)

    this.state = { nav: "all" }
  }

  changeNav(nav) {
    this.setState({ nav })
  }

  render() {
    return (
      <header className="header">
        <div onClick={e => this.changeNav("all")} className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="title">
          <span>Reports</span>
        </div>
        <div
          onClick={e => this.changeNav("all")}
          className={"nav-btn" + (this.state.nav === "all" ? " active" : "")}
        >
          <Link to="/">Overall</Link>
        </div>
        <div
          onClick={e => this.changeNav("spec")}
          className={"nav-btn" + (this.state.nav === "spec" ? " active" : "")}
        >
          <Link to="/spec">Specific</Link>
        </div>
      </header>
    )
  }
}

export default Header
