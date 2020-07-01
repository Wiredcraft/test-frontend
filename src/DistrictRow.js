import React, { useState } from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import TownshipRow from "./TownshipRow";

const DistrictRow = ({ district, query, setQuery, districtStyle }) => {
  const [openTownships, setOpenTownships] = useState([]);

  const handleTownshipClick = (index) => {
    if (openTownships.length > 0 || query.length === 0) {
      setOpenTownships([]);
    } else {
      setOpenTownships([...openTownships, ...index]);
    }
  };

  console.log(openTownships);
  console.log(query);

  return (
    <React.Fragment>
      <TableRow style={districtStyle}>
        <TableCell component="th" scope="row">
          {district.name}
        </TableCell>
        <TableCell>
          <button
            aria-label="expand row"
            onClick={() =>
              handleTownshipClick(
                district.townships.map((township) => township)
              )
            }
          >
            Show Townships
          </button>
        </TableCell>
        <TableCell>blank</TableCell>
        <TableCell>blank</TableCell>
        <TableCell>blank</TableCell>
        <TableCell>blank</TableCell>
      </TableRow>
      {query === null ||
      query === undefined ||
      query === "" ||
      district.townships
        .map((township) => township.name.toLowerCase().includes(query))
        .every((func) => func === false)
        ? district.townships.map((township) => (
            <TownshipRow
              township={township}
              townshipStyle={
                openTownships[openTownships.length - 1] === undefined
                  ? { display: "none" }
                  : districtStyle.display === "none"
                  ? { display: "none" }
                  : openTownships[openTownships.length - 1] ===
                    district.townships.map((township) => township)[
                      district.townships.map((township) => township).length - 1
                    ]
                  ? { display: "table-row" }
                  : { display: "none" }
              }
            />
          ))
        : district.townships
            .filter((township) => township.name.toLowerCase().includes(query))
            .map((queriedTownship) => (
              <TownshipRow
                township={queriedTownship}
                townshipStyle={
                  queriedTownship.name.toLowerCase().includes(query) ||
                  openTownships[openTownships.length - 1] ===
                    district.townships.map((township) => township)[
                      district.townships.map((township) => township).length - 1
                    ]
                    ? { display: "table-row" }
                    : openTownships[openTownships.length - 1] === undefined &&
                      queriedTownship.name.toLowerCase().includes(query)
                    ? { display: "table-row" }
                    : { display: "none" }
                }
              />
            ))}
    </React.Fragment>
  );
};

export default DistrictRow;
