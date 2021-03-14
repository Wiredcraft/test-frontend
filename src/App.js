import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import { connect } from "react-redux";

import "./App.scss";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import Info from "./components/Info";
import Users from "./components/Users";
import { HomeSvg, AlertSvg, ProfileSvg } from "./utils/svg";
import { fetchGallery } from "./actions/fetchData";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchGallery());
  }

  render() {
    return (
      <Router>
        <header>
          <SearchBar />
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="selectedLink">
                  <HomeSvg />
                </NavLink>
              </li>
              <li>
                <NavLink to="/info" activeClassName="selectedLink">
                  <AlertSvg />
                </NavLink>
              </li>
              <li>
                <NavLink to="/users" activeClassName="selectedLink">
                  <ProfileSvg />
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <hr />
        <section>
          <Switch>
            <Route exact path="/">
              <Gallery />
            </Route>
            <Route path="/info">
              <Info />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </section>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  imgList: state.gallery.imgList,
  filteredImgList: state.gallery.filteredImgList,
  loading: state.gallery.loading,
  error: state.gallery.error
});

export default connect(mapStateToProps)(App);
