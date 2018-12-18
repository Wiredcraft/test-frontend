import React, { Component } from 'react';
import styles from './App.module.scss';
import Table from './components/Table/Table';
import { data } from './data/data'
import TableFilter from './components/TableFilter/TableFilter';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Nav />
        <div className={styles.TableContainer}>
          <TableFilter />
          <Table data={data} />
        </div>
        
          
      </div>
    );
  }
}

export default App;
