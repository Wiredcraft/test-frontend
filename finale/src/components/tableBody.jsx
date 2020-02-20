import React, { Component } from 'react';

class TableBody extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        { id: 1, area: "2014-04-18", lastIn: 121.0, numForms: "Shipped", numVot: "123,456", update: "342,456", name: "A", points: 5, percent: 50 },
        { id: 2, area: "2014-04-21", lastIn: 121.0, numForms: "Not Shipped", name: "B", points: 10, percent: 60 },
        { id: 3, area: "2014-08-09", lastIn: 121.0, numForms: "Not Shipped", name: "C", points: 15, percent: 70 },
        { id: 4, area: "2014-04-24", lastIn: 121.0, numForms: "Shipped", name: "D", points: 20, percent: 80 },
        { id: 5, area: "2014-04-26", lastIn: 121.0, numForms: "Shipped", name: "E", points: 25, percent: 90 },
      ],
      expandedRows: []
    };
  }

  //Click handler for expanding and collapsing rows of table
  rowClick(rowId) {
    const currentExpandedrows = this.state.expandedRows;
    const isRowCurrExpanded = currentExpandedrows.includes(rowId);

    //Toggle for expanding or collapsing rows
    const newExpandedRows = isRowCurrExpanded ?
      currentExpandedrows.filter(id => id !== rowId) :
      currentExpandedrows.concat(rowId);

    this.setState({ expandedRows: newExpandedRows });
  }

  //Display expanded rows of data
  renderRow(row) {
    const clickCallback = () => this.rowClick(row.id);
    const regionRows = [
      <tr onClick={clickCallback} key={"row-data " + row.id}>
        <td>{row.area}</td>
        <td>{row.lastIn}</td>
        <td>{row.numForms}</td>
        <td>{row.numVot}</td>
        <td>{row.update}</td>
      </tr>
    ];

    //Expand state row to district row if there is data on district row
    if (this.state.expandedRows.includes(row.id)) {
      regionRows.push(
        <tr key={"row-expanded-" + row.id}>
          <td>{row.name}</td>
          <td>{row.points}</td>
          <td>{row.percent}</td>
        </tr>
      );
    }
    return regionRows;
  }


  render() {
    let allRows = [];

    this.state.data.forEach(row => {
      const eachRow = this.renderRow(row);
      allRows = allRows.concat(eachRow);
    });

    return (
      <table>{allRows}</table>
    );
  }
}

export default TableBody;