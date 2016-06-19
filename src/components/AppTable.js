import React,{PropTypes} from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import DropDownMenu from './AppDropDownMenu';
import {connect} from 'react-redux';
import {searchItems} from '../actions/actions';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
  searchStyle: {
  	width: '70vw',
  },
};

const tableData = [
  {
    region: 'John Smith',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
    selected: true,
  },
  {
    region: 'Randal White',
    inpot: 'Unemployed',
    forms: 'Unemployed',
    voters: 'Unemployed',
    update: 'Unemployed',
  },
  {
    region: 'Stephanie Sanders',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
  },
  {
    region: 'Steve Brown',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
  },
  {
    region: 'Joyce Whitten',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
  },
  {
    region: 'Samuel Roberts',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
  },
  {
    region: 'Adam Moore',
    inpot: 'Employed',
    forms: 'Employed',
    voters: 'Employed',
    update: 'Employed',
  },
];


// this component has events, thus use class
class TableContent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
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
    let { dispatch,items,} = this.props;
    console.log(this.props);
    return (
      <div className = "table-content">
        <Table
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
                <DropDownMenu />
               <TextField
			      hintText="Search Field"
			      floatingLabelText="Search"
			      type="text"
			      style = {styles.searchStyle}
            onKeyUp = { (e) => {
              dispatch(searchItems(e.target.value.trim()))
            }}
			    />
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
            showRowHover={true}
            stripedRows={this.state.stripedRows}
          >
            {items.map( (row, index) => (
              <TableRow key={index} selected={row.selected} >
                <TableRowColumn>{row.region}</TableRowColumn>
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
    state.items = tableData
    return {
      items: tableData
    }
}

export default connect(dataToProps)(TableContent)
