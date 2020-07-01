import React, { useState } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";

import RegionRow from "./RegionRow";

export default function TableMain({ Regions }) {
  const [query, setQuery] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <TableContainer>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />
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
          {query === null ||
          query === undefined ||
          query === "" ||
          Regions.map((region) =>
            region.name.toLowerCase().includes(query)
          ).every((func) => func === false)
            ? Regions.map((region) => (
                <RegionRow region={region} query={query} setQuery={setQuery} />
              ))
            : Regions.filter((region) =>
                region.name.toLowerCase().includes(query)
              ).map((queriedRegion) => (
                <RegionRow
                  region={queriedRegion}
                  query={query}
                  setQuery={setQuery}
                />
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
