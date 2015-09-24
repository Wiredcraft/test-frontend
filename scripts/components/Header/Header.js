import React from 'react';
import './Header.scss'

export default class Header extends React.Component{
  render(){
    let padding = 600;
    return (
      <div className={'HeaderTabsContainer'}>
        <div className={'fa fa-pencil fa-2x HeaderIcon'}></div>
        <h2 className={'HeaderTitle'}>Reports</h2>
        <div className={'HeaderTab selected'}>
          <h2 className={'HeaderTabTiltle'}>Specific</h2>
        </div>
        <div className={'HeaderTab'}>
          <h2 className={'HeaderTabTiltle'}>Overall</h2>
        </div>
      </div>
    );
  }
}
