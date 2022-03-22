import React from 'react';
import './search.scss'
import { searchAction } from '../../Store/Action/action';
import { connect } from 'react-redux';

const SearchInput = (props) => {
  let that = props;
  const handleSearch = (e) => {
    const action = searchAction(e.target.value);
    that.dispatch(action);
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

const mapStateToProps = state => {
  return {
    list: state.list,
    all: state.all
  };
};
export default connect(mapStateToProps)(SearchInput);