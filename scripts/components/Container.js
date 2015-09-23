import React from 'react';
import { Styles } from 'material-ui';
import Header from './Header'
import Content from './Content'
import 'font-awesome/css/font-awesome.min.css'

let ThemeManager = new Styles.ThemeManager();

export default class Container extends React.Component{
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }
  render(){
    return (
      <Header>
        <Content />
      </Header>
    );
  }
}

Container.childContextTypes = {
  muiTheme: React.PropTypes.object
};
