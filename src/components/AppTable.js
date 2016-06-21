import React,{PropTypes} from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import VerticalIcon from 'material-ui/svg-icons/editor/vertical-align-bottom';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import DropDownMenu from './AppDropDownMenu';
import {connect} from 'react-redux';
import {searchItems,showState} from '../actions/actions';
import FontIcon from 'material-ui/FontIcon';
import {grey50,green500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import styles from '../config/styles';

class TableContent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: true,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '300px',
    };

	this.handleToggle = (event, toggled) => {
		this.setState({
		  [event.target.name]: toggled,
		});
	};
	this.handleChange = (event) => {
    	this.setState({height: event.target.value});
  	};
  }

  render() {
    let { dispatch,items,triggerId} = this.props;
    console.log('triggerId',triggerId);
    return (
      <div className = "table-content">
        <DropDownMenu/>
        <Table style={styles.tableStyle}
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="5">
                <TextField
        			      hintText="Search Field"
        			      floatingLabelText="Search"
        			      type="text"
        			      style = {styles.searchStyle}
                    onKeyUp = { (e) => {
                      dispatch(searchItems(e.target.value.trim()))
                    }} />
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn >Region</TableHeaderColumn>
              <TableHeaderColumn >Last inpot</TableHeaderColumn>
              <TableHeaderColumn >Number of forms</TableHeaderColumn>
              <TableHeaderColumn >Number of Voters</TableHeaderColumn>
              <TableHeaderColumn >Update</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {items.map( (row, index) => (
              <TableRow key={row.id} selected={row.selected} style={{
                display: row.parentId === 0 || row.parentId === triggerId ? '' : 'none'
              }}>
                <TableRowColumn >
                <i className={'circle-icon'}>S</i>
                {row.region}
                  <IconButton style={styles.downloadStyle}>
                    <VerticalIcon color={grey50} style={styles.verticalIconStyle}/>
                  </IconButton>
                  {
                    row.subLId !== 0 ?
                      <FlatButton
                        label="2 Districts +"
                        className={'district-icon'}
                        primary={true}
                        onTouchTap = { () => dispatch(showState(row.id)) }

                        /> : ''
                  }
                </TableRowColumn>
                <TableRowColumn>{row.inpot}</TableRowColumn>
                <TableRowColumn>{row.forms}</TableRowColumn>
                <TableRowColumn>{row.voters}</TableRowColumn>
                <TableRowColumn>{row.update}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

let dataToProps = (state) => {
    return {
      items: state.items,
      triggerId: state.triggerId
    }
}

export default connect(dataToProps)(TableContent)
