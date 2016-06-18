import React , {Component, PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {grey50,indigo300, blueGrey700, deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppMenu from '../components/AppMenu';
import TableContent from '../components/AppTable';
import {connect} from 'react-redux';
// import { searchItems } from '../actions/actions';

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
  },
});

class Main extends Component {
    render() {
      console.log(this.props);
      // 通过调用 connect() 注入:
      return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <AppMenu />
            <TableContent/>
          </div>
        </MuiThemeProvider>
      )
    }
}
export default Main;


// Main.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.shape({
//     region: PropTypes.string.isRequired,
//     inpot: PropTypes.string.isRequired,
//     form: PropTypes.string.isRequired,
//     voter: PropTypes.number.isRequired,
//     update: PropTypes.string.isRequired
//   })),
//   searchItems: PropTypes.func.isRequired
// }
//
// function select(state) {
//     return {
//       items: state.items,
//       searchItems: state.searchItems
//     }
// }
//
// export default Main;
// connect 只有一个参数select,通过connect 使组件和store 连接
// export default connect(select)(Main);
