import React from 'react';
import './SearchBar.scss';

export default class SearchBar extends React.Component{
  constructor(){
    super();
    this.state = { listVisible: false, FilterText: 'Filter' };
  }
  selectItem(index){
    this.setState({ listVisible: false, FilterText: this.props.filters[index]});
  }
  showDropDownList() {
    this.setState({ listVisible: true });
  }
  render(){
    return (
      <div className='SearchBar'>
        <div className='barDropMenu'>
          <span className='placeHolder'>{this.state.FilterText}</span>
          <div className='fa fa-sort-desc dropMenuIcon' onClick={this.showDropDownList.bind(this)} />
          {
            this.state.listVisible === false ? '' :
            <div className='dropDownList'>
              {
                this.props.filters.map((item, index) => {
                  return (
                    <div className='dropItemArea' onClick={this.selectItem.bind(this, index)}>
                      <div className='dropItem'>{item}</div>
                    </div>
                  );
                })
              }
            </div>
          }
        </div>
        <input className='TextInput' type='text'
        placeholder='Search' />
        <button className='fa fa-search fa-lg serachButton'/>
      </div>
    );
  }
}

SearchBar.defaultProps = {
  filters: ['Region', 'Last Inpot']
};
