import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import TownshipRow from "./TownshipRow";

const DistrictRow = ({
  district,
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
          <Button
            aria-label="expand row"
            variant="contained"
            style={{ padding: 8, margin: 0, textTransform: "none" }}
            endIcon={
              areCommonElements(
                open,
                district.townships.map((township) => township)
              ) ? (
                <RemoveIcon />
              ) : (
                <AddIcon />
              )
            }
            onClick={() => {
              handleOpenClick(district.townships.map((township) => township));
            }}
          >
            {district.townships.length} Townships
          </Button>
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
