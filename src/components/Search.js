import React, { useState } from "react";
import { useDispatch } from "react-redux";
import searchSvg from "assests/icons/search.svg";

// define action
export const setFilter = (value) => ({
  type: "SET_FILTER",
  payload: value,
});

export default function Search() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleValueChange = (e) => {
    const { value } = e.target;
    setValue(value);
    // delay dispatch
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      dispatch(setFilter(value));
    }, 3000);
  };
  return (
    <div className="search-field">
      <img src={searchSvg} alt="search" className="icon" />
      <input value={value} onChange={handleValueChange}></input>
    </div>
  );
}
