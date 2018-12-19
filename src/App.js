import React, { Component } from 'react';
import styles from './App.module.scss';
import Table from './containers/Table/Table';
import TableFilter from './containers/TableFilter/TableFilter';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Nav />
        <div className={styles.TableContainer}>
          <TableFilter />
          <Table />
        </div>
        
          
      </div>
    );
  }
}

export default App;
