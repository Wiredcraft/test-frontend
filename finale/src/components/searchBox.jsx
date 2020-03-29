import React from 'react';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="searchContainer">
      <input
        type="text"
        name="query"
        className="searchBox"
        placeholder="Search your region..."
      //Need to add searching filter after figuring out dropdown filter
      // value={value}
      // onChange={event => onChange(event.currentTarget.value)}
      />
    </div>
  );
}

export default SearchBox;