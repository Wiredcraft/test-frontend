import React, { useState } from 'react';
import Township from './township';
import data from "../data"
import dl_logo from "../img/download_icon.png"

function DistrictHook() {

  //Array with only district objects and its belonging townships
  const onlyDistArr = data.map(({ subRegions }) => subRegions).flat();

  //expandedRows initialized to empty array which will contain the township rows being expanded 
  //setExpandedRows is used to update state of expandedRows, will be used to expand and collapse township rows
  const [expandedRows, setExpandedRows] = useState([]);

  //Click handler for expanding and collapsing rows
  function handleRowClick(rowId) {
    const currentExpandedRows = expandedRows;
    console.log(currentExpandedRows);

    //If false that means that district level expanded rows are not expanded when this click handler is called
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

    //If isRowCurrentlyExpanded is false state row will expand
    const newExpandedRows = isRowCurrentlyExpanded ?
      currentExpandedRows.filter(id => id !== rowId) :
      currentExpandedRows.concat(rowId);

    //Expand and collapse township rows
    setExpandedRows(newExpandedRows);
  }

  //Rendering function for district rows
  function renderRows(dist) {

    //dist.id is the callback and handleRowClick is function that accepts callback to expand or collapse a row
    const clickCallback = () => handleRowClick(dist.id);
    const isRowCurrentlyExpanded = expandedRows.includes(dist.id);

    const districtRow = [
      <tr className="districtRow" key={"district-row-data-" + dist.id}>
        <td>
          <span className="capital capitalDist">D</span>
          <span>{dist.title}</span>
          <img className="dl_logo" src={dl_logo} alt="dl_icon" />
          {dist.subRegions.length > 0 &&
            <button
              className="toggle-btn"
              onClick={clickCallback}>{dist.subRegions.length} Townships
               {isRowCurrentlyExpanded ? " -" : " +"}
            </button>
          }
        </td>
        <td>{dist.lastIn}</td>
        <td>{dist.numForms}</td>
        <td>{dist.numVotes}</td>
        <td>{dist.update}</td>
      </tr>
    ];

    //Toggle for rendering township rows of the district if there are townships under the district
    if (dist.subRegions.length > 0 && expandedRows.includes(dist.id)) {
      districtRow.push(
        dist.subRegions.map((town) =>
          <Township town={town} />
        )
      )
    }
    return districtRow;
  }

  let allDistRows = [];

  onlyDistArr.forEach(dist => {
    const perDistRow = renderRows(dist);
    allDistRows = allDistRows.concat(perDistRow);
  });

  return (
    <React.Fragment>
      {allDistRows}
    </React.Fragment>
  );
}


export default DistrictHook;
