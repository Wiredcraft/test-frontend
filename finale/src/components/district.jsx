import React, { Component } from 'react';
import data from "../data"
import Township from './township';
import Township4 from './township4';
import Township5 from './township5';

class District extends Component {
  constructor() {
    super();
    this.state = {
      expandedRows: []
    };
  }

  //Click handler for expanding rows
  handleRowClick(rowId) {
    const currentExpandedRows = this.state.expandedRows;
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

    const newExpandedRows = isRowCurrentlyExpanded ?
      currentExpandedRows.filter(id => id !== rowId) :
      currentExpandedRows.concat(rowId);

    this.setState({ expandedRows: newExpandedRows });
  }

  getDistRow(sta) {
    return sta.subRegions.map((district) =>
      <tr className="names" key={"row-data-" + sta.id}>
        <td>{district.title}</td>
        <td>{district.lastIn}</td>
        <td>{district.numForms}</td>
        <td>{district.numVotes}</td>
        <td>{district.update}</td>
      </tr>
    )
  }

  //Rendering function for sta row
  renderItem(sta) {
    const clickCallback = () => this.handleRowClick(sta.id);

    // let itemRows = this.getDistRow(sta);
    // console.log(itemRows)

    const itemRows = [
      <tr className="names" key={"row-data-" + sta.id}>
        <td> {sta.title}
          <button className="toggle-btn" onClick={clickCallback}>{sta.subRegions.length} Townships</button>
        </td>
        <td>{sta.lastIn}</td>
        <td>{sta.numForms}</td>
        <td>{sta.numVotes}</td>
        <td>{sta.update}</td>
      </tr>
    ];

    //Toggle for rendering township rows of the sta if there are townships under the sta
    if (this.state.expandedRows.includes(sta.id)) {
      itemRows.push(
        sta.subRegions.map((sta) =>
          <div>
            {sta.subRegions.map((town) =>
              <Township5 town={town} />
            )}
          </div >
        )
      )
    }
    return itemRows;
  }


  render() {
    let allItemRows = [];

    data.forEach(sta => {
      const perStateRow = this.renderItem(sta);
      allItemRows = allItemRows.concat(perStateRow);
    });

    return (
      <tr>{allItemRows}</tr>
    );
  }
}

export default District;