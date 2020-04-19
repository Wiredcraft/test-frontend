import React from 'react';

const Navbar = () => {
  return (
    <div className="header">
      <span className="logo_left">Logo</span>
      <span className="title_left">Reports</span>
      <div className="header_right">
        <span className="active">Overall</span>
        <span>Specific</span>
      </div>
    </div>
  );
}

export default Navbar;


