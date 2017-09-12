import React  from 'react';

import VisiblePanel from '../containers/VisiblePanel';
import Header from '../component/Header'
import Search from '../containers/search';
import Table from '../component/Table';

import '../asset/style/App.scss';

const App = () => (
  <div>
    <Header />
    <div className="wrap">
      <Search />
      <Table />
    </div>
  </div>
)

export default App
