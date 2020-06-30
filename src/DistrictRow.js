import React, { useState } from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Collapse from "@material-ui/core/Collapse";

import TownshipRow from "./TownshipRow";

const DistrictRow = ({ district }) => {
  const [openTownships, setOpenTownships] = useState([]);

  const handleTownshipClick = (index) => {
    setOpenTownships([...openTownships, ...index]);
  };

  return (
    <React.Fragment>
      <TableRow>
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
      <Collapse
        in={
          openTownships[openTownships.length - 1] === "undefined"
            ? false
            : openTownships[openTownships.length - 1] ===
              district.townships.map((township) => township)[
                district.townships.map((township) => township).length - 1
              ]
            ? true
            : false
        }
      >
        {district.townships.map((township) => (
          <TownshipRow township={township} />
        ))}
      </Collapse>
    </React.Fragment>
  );
};

export default DistrictRow;
