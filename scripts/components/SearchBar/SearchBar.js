import React from 'react';
import './SearchBar.scss'

export default class SearchBar extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div className='SearchBar'>
        <div className='SearchBarDropMenu'>
          <span className='placeHolder'>Filter</span>
          <button className='fa fa-sort-desc DropMenuIcon'/>
        </div>
        <input className='SearchBarTextInput' type='text'
        placeholder='Search' />
        <button className='fa fa-search fa-lg serachButton'/>
      </div>
    );
  }
}
