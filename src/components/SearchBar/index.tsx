// eslint-disable-next-line
import React, { useState } from 'react';

const SearchBar = ({ searchQuery, setSearchQuery} :any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  return (
    <input 
      key="search-bar"
      value={searchQuery}
      className="input-group mb-3 form-control"
      placeholder={"search name"}
      onChange={handleChange}
    />
  );
};

export default SearchBar;