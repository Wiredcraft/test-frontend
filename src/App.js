import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import Gallery from './pages/Gallery';
import Notification from './pages/Notification';
import User from './pages/User';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="app-container">
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
