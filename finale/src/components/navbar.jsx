import React, { Component } from 'react';
import logo from "../img/logo192.png"


class Navbar extends Component {
  render() {

    return (
      <header>
        <div className="logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="title">Reports</div>
        <div className="nav_right">
          <ul>
            <li className="active">
              <a href="/">Overall</a>
            </li>
            <li>
              <a href="/specific">Specific</a>
            </li>
          </ul>
        </div>
      </header>

    );
  }
}

export default Navbar;