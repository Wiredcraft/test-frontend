import React, { Component } from 'react';
import data from "../data"

class District extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          id: "00032",
          title: "Hankou District",
          level: "District",
          lastIn: "2020/02/02",
          numForms: "123,456",
          numVotes: "123,456",
          update: "342,456",
          isHidden: true,
          subRegions: [
            {
              id: "000321",
              title: "hanyang Township",
              level: "Township",
              lastIn: "2020/02/02",
              numForms: "123,456",
              numVotes: "123,456",
              update: "342,456",
              isHidden: true,
              subRegions: []
            },
            {
              id: "000322",
              title: "hanyang2 Township",
              level: "Township",
              lastIn: "2020/02/02",
              numForms: "123,456",
              numVotes: "123,456",
              update: "342,456",
              isHidden: true,
              subRegions: []
            },
          ]
        }
      ],
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

  //Rendering function for district row
  renderItem(item) {
    const clickCallback = () => this.handleRowClick(item.id);
    const itemRows = [
      <tr className="names" key={"row-data-" + item.id}>
        <td> {item.title}
          <button className="toggle-btn" onClick={clickCallback}>1 Township</button>
        </td>
        <td>{item.lastIn}</td>
        <td>{item.numForms}</td>
        <td>{item.numVotes}</td>
        <td>{item.update}</td>
      </tr>
    ];

    //Toggle for rendering township rows of the district
    if (this.state.expandedRows.includes(item.id)) {
      for (let i = 0; i < item.subRegions.length; i++) {
        itemRows.push(
          <tr className="names" key={"row-expanded-" + item.id}>
            <td>{item.subRegions[i].title}</td>
            <td>{item.subRegions[i].lastIn}</td>
            <td>{item.subRegions[i].numForms}</td>
            <td>{item.subRegions[i].numVotes}</td>
            <td>{item.subRegions[i].update}</td>
          </tr>
        )
      }
    }
    return itemRows;
  }

  render() {
    let allItemRows = [];

    this.state.data.forEach(item => {
      const perItemRows = this.renderItem(item);
      allItemRows = allItemRows.concat(perItemRows);
    });

    return (
      <tr>{allItemRows}</tr>
    );
  }
}

export default District;