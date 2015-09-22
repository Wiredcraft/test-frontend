import React from 'react';
import { IconButton, Styles, Tabs, Tab} from 'material-ui';
import 'font-awesome/css/font-awesome.min.css'


let { Colors, Spacing, Typography } = Styles;
let ThemeManager = new Styles.ThemeManager();

export default class Container extends React.Component{
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }
  render(){
    let padding = 600;
    let styles = {
      contentContainerStyle: {
        marginLeft: -padding,
      },
      div: {
        position: 'absolute',
        left: 48,
        backgroundColor: Colors.cyan500,
        width: padding,
        height: 48,
      },
      iconButton: {
        position: 'absolute',
        left: 0,
        backgroundColor: Colors.cyan500,
        color: 'white',
        marginRight: padding,
      },
      iconStyle: {
        color: Colors.white,
      },
      tabs: {
        position: 'relative',
      },
      tabsContainer: {
        position: 'relative',
        paddingLeft: padding,
      },
    };
    return (
      <div style={styles.tabsContainer}>
        <IconButton
          iconClassName="fa fa-pencil"
          style={styles.iconButton}
          iconStyle={styles.iconStyle}>
        </IconButton>

        <div style={styles.div}/>
          <Tabs
            style={styles.tabs}
            contentContainerStyle={styles.contentContainerStyle}
            initialSelectedIndex={1}>
            <Tab label="Overall">
              <h1>Nothing here.</h1>
            </Tab>
            <Tab label="Specific">
            </Tab>
          </Tabs>
      </div>
    );
  }
}

Container.childContextTypes = {
  muiTheme: React.PropTypes.object
};
