import React from 'react';
import './search.scss'
import { searchAction } from '../../Store/Action/action';
import store from '../../Store';

const SearchInput = () => {

  const handleSearch = (e) => {
    const action = searchAction(e.target.value);
    store.dispatch(action);
}

  return (
    <div className="search">
      <input type="text" 
             placeholder="start your search here"
             onChange={ e=>handleSearch(e) }
      />
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  );
}
 
export default SearchInput;