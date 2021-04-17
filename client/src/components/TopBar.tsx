import React, { useState } from 'react';
import bell from '../assets/images/bell.png';
import home from '../assets/images/home.png';
import profile from '../assets/images/profile.png';

const TopBar = () => {
  const [term, setTerm] = useState('');
  return (
    <div className="top-bar">
      <div className="search-input">
        <input type="text" />
      </div>
      <button>
        <img src={home} alt="home button" />
      </button>
      <button>
        <img src={bell} alt="bell button" />
      </button>
      <button>
        <img src={profile} alt="profile button" />
      </button>
    </div>
  );
};

export default TopBar;
