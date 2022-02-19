import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import TopBar from './components/TopBar';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
const App = () => {
  return (
    <div className="app-container">
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
