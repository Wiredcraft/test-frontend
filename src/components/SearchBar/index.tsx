import React,  { useState }from 'react';
import { useDispatch } from "react-redux";
import { onSearch } from "../../redux/actions";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    dispatch(onSearch({query: value, onEnterSearch: false}));
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(onSearch({query: searchQuery, onEnterSearch: true}));
    }
  };
  
  return (
    <input 
      key="search-bar"
      value={searchQuery}
      className="input-group mb-3 form-control"
      placeholder={"press enter to search"}
      onChange={handleChange}
      onKeyPress={handleEnter}
    />
  );
};

export default SearchBar;
