//Testing to render data for district and towns belong to district

import React, { Component } from 'react';
import data from "../data"
import Township from './township';
import Township4 from './township4';

class District2 extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: "0001",
          title: "Aunglan District",
          level: "District",
          lastIn: "2020/02/02",
          numForms: "123,456",
          numVotes: "123,456",
          update: "342,456",
          isHidden: true,
          subRegions: [
            {
              id: "00012",
              title: "Loilen Township",
              level: "Township",
              lastIn: "2020/02/02",
              numForms: "123,456",
              numVotes: "123,456",
              update: "342,456",
              isHidden: true,
              subRegions: []
            }
          ]
        },

        {
          id: "0002",
          title: "Aunglan District2",
          level: "District",
          lastIn: "2020/02/02",
          numForms: "123,456",
          numVotes: "123,456",
          update: "342,456",
          isHidden: true,
          subRegions: [
            {
              id: "00021",
              title: "Loilen Township2",
              level: "Township",
              lastIn: "2020/02/02",
              numForms: "123,456",
              numVotes: "123,456",
              update: "342,456",
              isHidden: true,
              subRegions: []
            }
          ]
        },
      ]
    };
  }

  renderDisAndTownRows(districtArray) {
    districtArray.map((district) =>
      <table className="names">
        <tr>
          <td>{district.title}</td>
          <td>{district.lastIn}</td>
          <td>{district.numForms}</td>
          <td>{district.numVotes}</td>
          <td>{district.update}</td>
        </tr>
        {
          district.subRegions.map((town) =>
            <tr className="names">
              <td>{town.title}</td>
              <td>{town.lastIn}</td>
              <td>{town.numForms}</td>
              <td>{town.numVotes}</td>
              <td>{town.update}</td>
            </tr>
          )
        }
      </table>
    )
  }

  render() {
    return (
      this.state.data.map((district) =>
        <table>
          <tr className="names">
            <td>{district.title}</td>
            <td>{district.lastIn}</td>
            <td>{district.numForms}</td>
            <td>{district.numVotes}</td>
            <td>{district.update}</td>
          </tr>
          {
            district.subRegions.map((town) =>
              <tr className="names">
                <td>{town.title}</td>
                <td>{town.lastIn}</td>
                <td>{town.numForms}</td>
                <td>{town.numVotes}</td>
                <td>{town.update}</td>
              </tr>
            )
          }
        </table >
      )
    )
  }

}

export default District2;