import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
import { data } from './data/data'
import TableFilter from './components/TableFilter';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <TableFilter />
        <Table data={data} />
          
      </div>
    );
  }
}

export default App;
