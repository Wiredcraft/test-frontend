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
  const townshipNumbers = [
    district.townships
      .map((township) => township)
      .flat(2)
      .reduce(function (prev, current) {
        return {
          lastInput: prev.lastInput + current.lastInput,
          formNumbers: prev.formNumbers + current.formNumbers,
          voterNumbers: prev.voterNumbers + current.voterNumbers,
          update: prev.update + current.update,
        };
      }),
  ];
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
        {townshipNumbers.map((input) => (
          <React.Fragment>
            <TableCell>{input.lastInput}</TableCell>
            <TableCell>{input.formNumbers}</TableCell>
            <TableCell>{input.voterNumbers}</TableCell>
            <TableCell>{input.update}</TableCell>
          </React.Fragment>
        ))}
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
