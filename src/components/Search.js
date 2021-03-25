import React, { useState } from "react";
import { useDispatch } from "react-redux";
import searchSvg from "assets/icons/search.svg";
import { setFilter } from "redux/actions";

export default function Search() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleValueChange = (e) => {
    const { value } = e.target;
    setValue(value);
    dispatch(setFilter(value));
  };
  return (
    <div className="search-field">
      <img src={searchSvg} alt="search" className="icon" />
      <input value={value} onChange={handleValueChange}></input>
    </div>
  );
}
