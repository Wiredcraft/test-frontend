import React, { useState } from 'react';
import searchIcon from '@/assets/icons/search.svg';
import { useDispatch } from 'react-redux';
import { onSearch } from '@/redux/actions';
import './index.scss';

export default function SearchBar() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const handleValueChange = (e) => {
    const { value } = e.target;
    setValue(value);
    dispatch(onSearch(value));
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
