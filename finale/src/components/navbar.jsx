import React, { Component } from 'react';
import logo from "../img/logo192.png"

class Navbar extends Component {
  render() {

    return (
      <React.Fragment>

        <header>
          <img className="logo" src={logo} alt="logo" />
          <div className="title">
            <h1>Report</h1>
          </div>
          <nav>
            <ul>
              <ul className="nav_links">
                <li>
                  <a href="#">Overall</a>
                </li>
                <li>
                  <a href="#">Specific</a>
                </li>
              </ul>
            </ul>
          </nav>
        </header>


        {/* <header className="header">
          <div className="leftNav">
            <img src={logo} alt="" />
            <h1>Report</h1>
            <h2>Overall</h2>
            <h2>Specific</h2>
          </div>
          <div className="rightNav">

          </div>
        </header> */}

      </React.Fragment>
    );
  }
}

export default Navbar;