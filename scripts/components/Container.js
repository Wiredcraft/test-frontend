import React from 'react';
import { Styles } from 'material-ui';
import Header from './Header/Header'
import ContentArea from './ContentArea/ContentArea'
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
        <ContentArea />
      </Header>
    );
  }
}

Container.childContextTypes = {
  muiTheme: React.PropTypes.object
};
