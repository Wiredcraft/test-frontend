import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const TownshipRow = ({ township }) => {
  return (
    <TableRow key={township.id}>
      <TableCell component="th" scope="row">
        {township.name}
      </TableCell>
      <TableCell>{township.lastInput}</TableCell>
      <TableCell>{township.formNumbers}</TableCell>
      <TableCell>{township.voterNumbers}</TableCell>
      <TableCell>{township.update}</TableCell>
    </TableRow>
  );
};

export default TownshipRow;
