import React from 'react';
import './App.scss';
import './assets/styles/reset.min.css';
import Waterfall from './components/waterfall/waterfall';
import Nav from './components/nav/nav';
import './assets/styles/iconfonts/iconfont.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Waterfall />
      </header>
    </div>
  );
}

export default App;
