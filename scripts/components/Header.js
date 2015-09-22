import React from 'react';
import { Tabs, Tab} from 'material-ui';

export default class Header extends React.Component{
  render(){
    return (
      <Tabs>
        <Tab label="Item One" >
        </Tab>
        <Tab label="Item Two" >
        </Tab>
        <Tab
          label="Item Three"/>
      </Tabs>
    );
  }
}
