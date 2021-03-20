import React from "react";
import Search from "./Search";
import Nav from "./Nav";

export default function TopBar() {
  return (
    <div className="top-bar">
      <Search />
      <Nav />
    </div>
  );
}
