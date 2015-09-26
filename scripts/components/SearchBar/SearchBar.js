import React from 'react';
import './SearchBar.scss';

export default class SearchBar extends React.Component{
  constructor(){
    super();
  }
  selectItem(item){
    this.props.selected = item;
    this.setState({ listVisible: false });
  }
  showDropDownList(e) {
    e.preventDefault();
    this.setState({ listVisible: true });

  }
  render(){
    return (
      <div className='SearchBar'>
        <div className='barDropMenu'>
          <span className='placeHolder'>Filter</span>
          <div className='fa fa-sort-desc dropMenuIcon' onClick={this.showDropDownList.bind(this)}/>
          <div className='dropDownList'
          onClick={this.selectItem.bind(this)} ></div>
        </div>
        <input className='TextInput' type='text'
        placeholder='Search' />
        <button className='fa fa-search fa-lg serachButton'/>
      </div>
    );
  }
}
