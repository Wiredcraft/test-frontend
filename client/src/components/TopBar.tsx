import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import bell from '../assets/images/bell.png';
import home from '../assets/images/home.png';
import profile from '../assets/images/profile.png';

const TopBar = () => {
  const history = useHistory();
  const [term, setTerm] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!term) {
      history.push('/');
    } else {
      history.push(`/search/${term}`);
    }
  }

  return (
    <div className="top-bar">
      <form className="search-input" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search-term"
          onChange={(ev) => setTerm(ev.target.value)}
        />
      </form>
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
