import React, { useEffect, useState } from "react";
import "./index.scss";
import { useDebouce } from "../../common";
import { connect } from "dva";
// @ts-ignore
const _Header: React.FC = ({ dispatch, limit, pager, txt }) => {
  const [searchTxt, setSearchTxt] = useState("");
  const debouncedTxt = useDebouce(searchTxt, 700);

  useEffect(() => {
    dispatch({
      type: "model/resetPage",
      payload: searchTxt,
    });
  }, [debouncedTxt, searchTxt, dispatch]);

  return (
    <div className="header">
      <div className="input_wrapper">
        <i className="iconfont icon-search"></i>
        <input
          type="text"
          value={searchTxt}
          onChange={(evt) => setSearchTxt(evt.target.value)}
        />
      </div>
      <i className="iconfont icon-Homehomepagemenu"></i>
      <i className="iconfont icon-bell"></i>
      <i className="iconfont icon-xxhdpiShape"></i>
    </div>
  );
};

// @ts-ignore
export const Header = connect(({ model }) => ({
  ...model,
}))(_Header);
