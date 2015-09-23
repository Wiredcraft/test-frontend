import React from 'react';
import { IconButton, Styles, Tabs, Tab} from 'material-ui';

import './Header.scss'

export default class Header extends React.Component{
  render(){
    let padding = 600;
    return (
      <div className={'tabsContainer'}>
        <IconButton
          iconClassName="fa fa-pencil mainIcon"
          style={{position: 'absolute',
          backgroundColor: '#00bcd4'}}
          className={'iconButton'}>
        </IconButton>

        <div className={'tabArea'}/>
          <Tabs
            className={'tabs'}
            contentContainerStyle={{marginLeft: -padding}}
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
