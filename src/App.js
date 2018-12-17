import React, { Component } from 'react';
import './App.css';
import StateRow from './components/StateRow'
import Table from './components/Table';
import { data } from './data/data'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>

        <table style={{width: '80%', margin: 'auto'}}>
          <thead>
            <tr>
              <th>Region</th>
              <th>Last input</th>
              <th>Number of forms</th>
              <th>Number of voters</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            <Table data={data} />
          </tbody>
          
          
        </table>
      </div>
    );
  }
}

export default App;
