import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
import { data } from './data/data'
import TableFilter from './components/TableFilter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <TableFilter />
        <Table data={data} />
          
      </div>
    );
  }
}

export default App;
