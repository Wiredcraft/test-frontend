import React from 'react';
import { IconButton, Styles,
      Tab, Tabs} from 'material-ui';
import Header from './Header';

let { Colors, Spacing, Typography } = Styles;
let ThemeManager = new Styles.ThemeManager();

export default class Container extends React.Component{
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }
  render(){
    return (<Header />);
  }
}

Container.childContextTypes = {
  muiTheme: React.PropTypes.object
};
