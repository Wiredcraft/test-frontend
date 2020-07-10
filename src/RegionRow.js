import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import DistrictRow from "./DistrictRow";

const RegionRow = ({
  region,
  open,
  handleOpenClick,
  areCommonElements,
  regionStyle,
}) => {
  const regionNumbers = [
    region.districts
      .map((district) => district.townships.map((township) => township))
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
      <TableRow style={regionStyle}>
        <TableCell>{region.name}</TableCell>
        <TableCell>
          <Button
            aria-label="expand row"
            variant="contained"
            style={{ padding: 8, margin: 0, textTransform: "none" }}
            endIcon={
              areCommonElements(
                open,
                region.districts.map((district) => district)
              ) ? (
                <RemoveIcon />
              ) : (
                <AddIcon />
              )
            }
            onClick={() => {
              handleOpenClick(region.districts.map((district) => district));
            }}
          >
            {region.districts.length} Districts
          </Button>
        </TableCell>
        {regionNumbers.map((input) => (
          <React.Fragment>
            <TableCell>{input.lastInput}</TableCell>
            <TableCell>{input.formNumbers}</TableCell>
            <TableCell>{input.voterNumbers}</TableCell>
            <TableCell>{input.update}</TableCell>
          </React.Fragment>
        ))}
      </TableRow>
      {region.districts.map((district) => (
        <DistrictRow
          district={district}
          districtStyle={
            areCommonElements(open, [district])
              ? { display: "table-row" }
              : { display: "none" }
          }
          open={open}
          handleOpenClick={handleOpenClick}
          areCommonElements={areCommonElements}
        />
      ))}
    </React.Fragment>
  );
};

export default RegionRow;
