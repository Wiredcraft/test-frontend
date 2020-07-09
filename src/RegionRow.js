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

        <TableCell>blank</TableCell>
        <TableCell>blank</TableCell>
        <TableCell>blank</TableCell>
        <TableCell>blank</TableCell>
      </TableRow>
      {region.districts.map((district) => (
        <DistrictRow
          district={district}
          query={query}
          districtStyle={
            areCommonElements(open, [district])
              ? { display: "table-row" }
              : areCommonElements(
                  open,
                  district.townships.map((township) => township)
                )
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
