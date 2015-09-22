import React from 'react';
import { IconButton, Styles, Tabs, Tab} from 'material-ui';
import Content from './Content'
import 'font-awesome/css/font-awesome.min.css'
import './Container.scss'

let { Colors, Spacing, Typography } = Styles;
let ThemeManager = new Styles.ThemeManager();

var MyComponent = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

});

export default class Container extends React.Component{
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }
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
              <MyComponent>
                <h1>Nothing here.</h1>
              </MyComponent>
            </Tab>
            <Tab label="Specific">
              <Content />
            </Tab>
          </Tabs>
      </div>
    );
  }
}

Container.childContextTypes = {
  muiTheme: React.PropTypes.object
};
