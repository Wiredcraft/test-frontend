import React from 'react';
import { FontIcon, DropDownMenu, TextField } from 'material-ui';

import './SearchBar.scss'

export default class SearchBar extends React.Component{
  constructor(){
    super();
  }
  render(){
    let menuItems = [
       { payload: 'region', text: 'Region' },
       { payload: 'lastDate', text: 'Last Inpot' }
    ];
    return (
      <div className='SearchBar'>
        <DropDownMenu  menuItems={menuItems}
        className='SearchBarDropMenu'
        onChange={
          (e, index, item) =>{
            console.log(e);
            console.log(index);
            console.log(item);
          }
        }/>
        <TextField className={'SearchBarTextInput'}
          style={{width: '80%'}}
          hintText="Search" />
      </div>
    );
  }
}
