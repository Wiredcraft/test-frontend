import React from 'react'
import { connect } from 'react-redux'
import {setLevel,setKeyWord} from '../actions'
import searchPic from '../asset/image/search.png';

const Search = ({ level,keyWord,dispatch }) => {
  let input
  let select
  return (
    <form className="filter clearfix" onSubmit={e => {
      e.preventDefault()
      dispatch(setKeyWord(input.value.trim()))
    }} 
    >
      <div className="select-wrap">
        <select value={level} 
          onChange={e => {
            dispatch(setLevel(select.value))
          }}
          ref={node => {
            select = node
          }}
        >
          <option value="state">State</option>
          <option value="district">District</option>
          <option value="township">Township</option>
        </select>
      </div>
      <input type="text" 
        ref={node => {
          input = node
        }} 
      />
      <button>
        <img src={searchPic} alt="search-icon" />
      </button>
    </form>
  )
}
const mapStateToProps = (filter) => {
  return {
    level:filter.level,
    keyWord:filter.keyWord
  }
}

export default connect(mapStateToProps)(Search)