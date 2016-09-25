import React, { Component } from 'react'
import { Nav, Navbar, NavbarBrand, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap'

export default class Navigation extends Component {
  render() {
    return (
      <Navbar fluid={true} className="without-radius">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">
              <Image src="http://react-bootstrap.github.io/assets/thumbnail.png" circle width="23" height="23" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Reports</NavItem>
          </Nav>
          <Nav pullRight activeKey={1}>
            <NavItem eventKey={1} href="#">Overall</NavItem>
            <NavItem eventKey={2} href="#">Specific</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
