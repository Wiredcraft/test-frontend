import React, { Component } from 'react';
import data from "../data"
import Township from './township';
import Township2 from './township2';
import Township3 from './township3';
import Township4 from './township4';

class District2 extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          disName: "state1",
          subRegions: [
            { townName: "dist11" },
            { townName: "dist12" },
            { townName: "dist12" },
          ]
        },
        {
          disName: "state2",
          subRegions: [
            { townName: "dist21" },
            { townName: "dist22" },
            { townName: "dist23" },
          ]
        },

      ]
    };
  }



  //Rendering function for district row
  // renderTownRow(districtArray) {
  //   districtArray.map((district) =>
  //     <tr className="names">{district.title}
  //       <tr className="names">
  //         {district.subRegions.map((town) =>
  //           <tr>
  // <td>{town.title}</td>
  // <td>{town.lastIn}</td>
  // <td>{town.numForms}</td>
  // <td>{town.numVotes}</td>
  // <td>{town.update}</td>
  //           </tr>
  //         )}
  //       </tr>
  //       )
  //     </tr>
  //   )
  // }

  render() {
    return (
      this.state.data.map((district) =>
        <tr className="names">
          <p>{district.disName}</p>
          {
            district.subRegions.map((town) =>
              <tr className="names">
                <td>{town.townName}</td>
              </tr>
            )
          }
        </tr>
      )
    );
  }
}

export default District2;