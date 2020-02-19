import React, { Component } from 'react';
// import { Link, NavLink, Switch } from 'react-router-dom';
import logo from "../img/logo192.png"


class Navbar extends Component {
  render() {

    return (

      <header>
        <div className="logo">
          <img className="logo" src={logo} alt="logo" />
          <span>Report</span>
        </div>
        <nav>
          <ul>
            <ul className="nav_links">
              <li>
                <a href="/">Overall</a>
              </li>
              <li>
                <a href="/specific">Specific</a>
              </li>
            </ul>
          </ul>
        </nav>
      </header>

    );
  }
}

export default Navbar;