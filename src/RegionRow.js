import React, { useState } from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Collapse from "@material-ui/core/Collapse";

import DistrictRow from "./DistrictRow";

const RegionRow = ({ region }) => {
  const [openDistricts, setOpenDistricts] = useState([]);

  const handleDistrictClick = (index) => {
    setOpenDistricts([...openDistricts, ...index]);
  };

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>{region.name}</TableCell>
        <TableCell>
          <button
            aria-label="expand row"
            onClick={() =>
              handleDistrictClick(region.districts.map((district) => district))
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
      <Collapse
        in={
          openDistricts[openDistricts.length - 1] === "undefined"
            ? false
            : openDistricts[openDistricts.length - 1] ===
              region.districts.map((district) => district)[
                region.districts.map((district) => district).length - 1
              ]
            ? true
            : false
        }
        timeout="auto"
      >
        {region.districts.map((district) => (
          <DistrictRow district={district} />
        ))}
      </Collapse>
    </React.Fragment>
  );
};

export default RegionRow;
