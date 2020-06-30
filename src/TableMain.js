import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";

import RegionRow from "./RegionRow";

export default function TableMain({ Regions }) {
  return (
    <TableContainer>
      <Table aria-label="table">
        <TableHead>
          <TableCell>Region</TableCell>
          <TableCell />
          <TableCell>Last Input</TableCell>
          <TableCell>Number of Forms</TableCell>
          <TableCell>Number of Voters</TableCell>
          <TableCell>Update</TableCell>
        </TableHead>
        <TableBody>
          {Regions.map((region) => (
            <RegionRow region={region} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
