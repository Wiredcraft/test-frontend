import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import DistrictRow from "./DistrictRow";

const RegionRow = ({
  region,
  query,
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
          <button
            aria-label="expand row"
            onClick={() =>
              handleOpenClick(region.districts.map((district) => district))
            }
          >
            Show Districts
          </button>
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
          query={query}
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
