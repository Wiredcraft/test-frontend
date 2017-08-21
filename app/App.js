import React, { Component } from 'react';
import Panel from './component/panel';
import avatarPic from './image/avatar.png';
import searchPic from './image/search.png';
import './style/normalize.css';
import './style/App.scss';

class App extends Component { 

  constructor() {
    super()
    this.state = {
      keyWrod: '',
      filter: '',
      startLevel: 'state'
    }
  }

  handleLevelChange(event) {
    event.preventDefault();
    this.setState({ startLevel: event.target.value })
  }

  handleSearch(event) {
    event.preventDefault();
    this.setState({ keyWrod: this.input.value })
  }

  render() {
    return (
      <div className="App">

        <header className="clearfix">
          <span className="avatar">
            <img src={avatarPic} alt="avatar" />
          </span>
          Reports
          <a>Specific</a>
          <a className="active">Overall</a>
        </header>

        <div className="wrap">
          <form className="filter clearfix" onSubmit={this.handleSearch.bind(this)} >
            <div className="select-wrap">
              <select value={this.state.startLevel} onChange={this.handleLevelChange.bind(this)}>
                <option value="state">State</option>
                <option value="district">District</option>
                <option value="township">Township</option>
              </select>
            </div>
            <input type="text" ref={(input) => this.input = input}/>
            <button>
              <img src={searchPic} alt="search-icon" />
            </button>
          </form>

          <div className="table">
            <div className="table-header clearfix">
              <div>Region</div>
              <div>Last input</div>
              <div>Number of forms</div>
              <div>Number of Voters</div>
              <div>Update</div>
            </div>
            <div>
              <Panel keyWord={this.state.keyWrod} startLevel={this.state.startLevel}/>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default App
