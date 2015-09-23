import React from 'react';
import { Table, TableBody, TableHeader, TableFooter,
  TableRow, TableHeaderColumn, TableRowColumn, TextField } from 'material-ui';

export default class content extends React.Component{
  constructor(){
    super();
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      height: '300px',
    };
  }
  render(){
    return (
      <Table
        style={{width: 400,
        margin: "0 auto"}}
        height={this.state.height}
        fixedHeader={this.state.fixedHeader}
        fixedFooter={this.state.fixedFooter}
        selectable={this.state.selectable}>
        <TableHeader enableSelectAll={this.state.enableSelectAll}>
          <TableRow>
            <TableHeaderColumn colSpan="3" tooltip='Super Header' style={{textAlign: 'center'}}>
              Super Header
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn tooltip='The ID'>ID</TableHeaderColumn>
            <TableHeaderColumn tooltip='The Name'>Name</TableHeaderColumn>
            <TableHeaderColumn tooltip='The Status'>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          deselectOnClickaway={this.state.deselectOnClickaway}
          showRowHover={this.state.showRowHover}
          stripedRows={this.state.stripedRows}>
        <TableRow selected={true}>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
              Super Footer
            </TableRowColumn>
          </TableRow>
        </TableFooter>
      </Table>
    );
  }
}
