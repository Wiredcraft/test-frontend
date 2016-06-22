import React,{PropTypes} from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import VerticalIcon from 'material-ui/svg-icons/editor/vertical-align-bottom';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux';
import {changeFilter,searchItems,showState} from '../actions/actions';
import FontIcon from 'material-ui/FontIcon';
import {grey50,green500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import styles from '../config/styles';

class TableContent extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);

    this.state = Object.assign({},{
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
    },props);

	this.handleToggle = (event, toggled) => {
		this.setState({
		  [event.target.name]: toggled,
		});
	};
	this.handleChange = (event) => {
    	this.setState({height: event.target.value});
  	};
  this.handleDropChange = (event, index, value) => {
      this.setState({value});
    }
  }

  showDrop(stateId,districtId) {
    let arr = this.state.items.map((item) => {
      if (districtId === '000') {
        if (item.stateId == stateId && item.districtId != '000') {
          item.display = !item.display;
        }
      } else {
        if(item.stateId == stateId && item.districtId!= '000' && item.townshipId != '000') {
          item.display = !item.display
        }
      }
    })
    this.setState(this.state);
  }

  render() {
    let { dispatch,items,triggerId} = this.props;
    return (
      <div className = "table-content">
        <DropDownMenu maxHeight={300} value={this.state.value} onChange={ (event, index, value)=> {
          this.setState({value});
          dispatch(changeFilter(value));
        }} className={"drop-menu"}>
          {this.state.dropItems}
        </DropDownMenu>
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
            <tr className={'table-header'}>
              <td className={'td-region'}>Region</td>
              <td >Last inpot</td>
              <td >Number of forms</td>
              <td >Number of Voters</td>
              <td >Update</td>
            </tr>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {items.map( (row, index) => (
              <tr key={row.id} selected={row.selected} style={{
                left: row.districtId === '000' && row.townshipId === '000' ? '0px' : row.townshipId === '000' ? '10px' : '20px',
                display: row.display ? '' : 'none'
              }}>
                <td className={'td-region'} style={{
                  left: row.districtId === '000' && row.townshipId === '000' ? '0px' : row.townshipId === '000' ? '10px' : '20px'
                }}>
                <i className={'circle-icon'}>{
                    row.districtId === '000' && row.townshipId === '000' ? 'S' : row.townshipId === '000' ? 'D' : 'T'
                }</i>
                {row.region}
                  <IconButton style={styles.downloadStyle}>
                    <VerticalIcon color={grey50} style={styles.verticalIconStyle}/>
                  </IconButton>
                  {
                      row.districtId != '000' && row.townshipId != '000' ?
                       "" : <FlatButton
                        label="2 Districts +"
                        className={'district-icon'}
                        primary={true}
                        onTouchTap = { () => this.showDrop(row.stateId,row.districtId) }
                      />
                  }
                </td>
                <td>{row.inpot}</td>
                <td>{
                  // todo: it seems like class inner function cannot return a value, should extract to a function
                  row.forms > 100000 ? (row.forms / 1000).toFixed(3).replace(/\./,',') : row.forms
                }</td>
                <td>{
                  row.voters > 100000 ? (row.voters / 1000).toFixed(3).replace(/\./,',') : row.voters
                }
                </td>
                <td>{
                  row.update > 100000 ? (row.update / 1000).toFixed(3).replace(/\./,',') : row.update
                }
                </td>
              </tr>
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
      triggerId: state.triggerId,
      value: "region",
    }
}

const dropItems = [];
const properties = ["region",'update'];
for (let i = 0; i < properties.length; i++ ) {
	dropItems.push(<MenuItem value={properties[i]} key={i} primaryText={`${properties[i]}`} />);
};

TableContent.defaultProps = {
  dropItems: dropItems
}
export default connect(dataToProps)(TableContent)
