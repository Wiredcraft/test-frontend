import React from 'react';
import { IconButton, Styles, Tabs, Tab} from 'material-ui';

import './Header.scss'

export default class Header extends React.Component{
  render(){
    let padding = 600;
    return (
      <div className={'HeaderTabsContainer'}>
        <IconButton
          iconClassName="fa fa-pencil"
          iconStyle={{color:'#fff'}}
          style={{position: 'absolute',
          backgroundColor: '#00bcd4'}}
          className={'HeaderIconButton'}>
        </IconButton>

        <div className={'HeaderTabArea'}/>
          <Tabs
            className={'HeaderTabs'}
            contentContainerStyle={{marginLeft: -padding,
            textAlign: 'center'}}
            initialSelectedIndex={1}>
            <Tab label="Overall">
              <h1>Nothing here.</h1>
            </Tab>
            <Tab label="Specific">
              {this.props.children}
            </Tab>
          </Tabs>
      </div>
    );
  }
}
