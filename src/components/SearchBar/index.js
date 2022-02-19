import React, { useState } from 'react';
import searchIcon from '@/assets/icons/search.svg';
import './index.scss';

export default function SearchBar() {
  const [value, setValue] = useState('');

  const handleValueChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <div className="search-field">
      <img src={searchIcon} alt="search" className="search-field__icon" />
      <input
        value={value}
        onChange={handleValueChange}
        className="search-field__input"
      />
    </div>
  );
}
