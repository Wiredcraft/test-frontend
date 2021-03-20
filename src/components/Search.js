import React, { useState } from "react";
import { useDispatch } from "react-redux";
import searchSvg from "assests/icons/search.svg";

// define action
export const setFilter = (query) => ({
  type: "SEARCH",
  payload: query,
});

export default function Search() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleValueChange = (e) => {
    const query = e.target.value;
    setValue(query);
    dispatch(setFilter(query));
  };
  return (
    <div className="search-field">
      <img src={searchSvg} alt="search" className="icon" />
      <input value={value} onChange={handleValueChange}></input>
    </div>
  );
}
