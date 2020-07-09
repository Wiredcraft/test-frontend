import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import TownshipRow from "./TownshipRow";

const DistrictRow = ({
  district,
  query,
  districtStyle,
  open,
  handleOpenClick,
  areCommonElements,
}) => {
  return (
    <React.Fragment>
      <TableRow style={districtStyle}>
        <TableCell component="th" scope="row">
          ---
          {district.name}
        </TableCell>
        <TableCell>
          <button
            aria-label="expand row"
            onClick={() =>
              handleOpenClick(district.townships.map((township) => township))
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
      {district.townships.map((township) => (
        <TownshipRow
          township={township}
          query={query}
          townshipStyle={
            areCommonElements(open, [township])
              ? { display: "table-row" }
              : { display: "none" }
          }
        />
      ))}
    </React.Fragment>
  );
};

export default DistrictRow;
