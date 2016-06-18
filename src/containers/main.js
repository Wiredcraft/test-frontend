import React , {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {grey50,indigo300, blueGrey700, deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppMenu from '../components/AppMenu';
import TableContent from '../components/AppTable';

// configure the ui theme via parameter
const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
    color: 'white',
    textColor: blueGrey700,
    titleFontWeight: 'bolder',
    fontSize: '17px'
  },
  flatButton: {
  	textColor: blueGrey700,
  	fontSize: '17px',
  },
  tabs: {
    backgroundColor: '#fff',
    textColor: blueGrey700,
    selectedTextColor: indigo300,
  }
});


class Main extends Component {
    render() {
      return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <AppMenu />
            <TableContent />
          </div>
        </MuiThemeProvider>
      )
    }
}

export default Main;