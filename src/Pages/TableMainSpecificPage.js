import React, { useState } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import RegionRow from "../Components/RegionRow";
import FilterMenu from "../Components/FilterMenu";
import ResetButton from "../Components/ResetButton";
import SearchBar from "../Components/SearchBar";

const areCommonElements = (arr1, arr2) => {
  const arr2Set = new Set(arr2);
  return arr1.some((el) => arr2Set.has(el));
};

export default function TableMain({ Regions }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(Regions.map((region) => region));
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    if (index === 0) {
      setOpen(Regions.map((region) => region));
    } else if (index === 1) {
      setOpen([
        ...Regions.map((region) => region),
        ...Regions.map((region) =>
          region.districts.map((district) => district)
        ).flat(),
      ]);
    } else if (index === 2) {
      setOpen([
        ...Regions.map((region) => region),
        ...Regions.map((region) =>
          region.districts.map((district) => district)
        ).flat(),
        ...Regions.map((region) =>
          region.districts.map((district) =>
            district.townships.map((township) => township)
          )
        ).flat(2),
      ]);
    }
  };

  const handleOpenClick = (index) => {
    if (
      areCommonElements(open, index) &&
      index.some((item) => item.townships === undefined)
    ) {
      setOpen([...open.filter((item) => !index.some((x) => x.id === item.id))]);
    } else if (
      areCommonElements(open, index) &&
      index.some((item) => item.townships !== undefined)
    ) {
      setOpen([
        ...open.filter(
          (item) =>
            !index.some((x) => x.id === item.id) &&
            !index
              .map((item) => item.townships.map((township) => township))
              .flat(2)
              .some((y) => y.id === item.id)
        ),
      ]);
    } else {
      setOpen([...open, ...index]);
    }
  };

  return (
    <Grid container direction="column" component={Paper}>
      <Grid item container spacing={5} direction="row">
        <Grid
          item
          xs={1}
          md={2}
          style={{ textAlign: "center", margin: "auto" }}
        >
          <FilterMenu
            selectedIndex={selectedIndex}
            handleMenuItemClick={handleMenuItemClick}
          />
        </Grid>
        <Grid
          item
          xs={1}
          md={2}
          style={{ textAlign: "center", margin: "auto" }}
        >
          <ResetButton
            open={open}
            setSelectedIndex={setSelectedIndex}
            setOpen={setOpen}
            setQuery={setQuery}
            Regions={Regions}
          />
        </Grid>
        <Grid
          item
          xs={10}
          md={8}
          style={{ textAlign: "center", margin: "auto" }}
        >
          <SearchBar
            Regions={Regions}
            setQuery={setQuery}
            query={query}
            setOpen={setOpen}
          />
        </Grid>
      </Grid>
      <Grid item container>
        <TableContainer style={{ textAlign: "center" }}>
          <Table aria-label="table" size="small">
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
                <RegionRow
                  key={region.id}
                  region={region}
                  open={open}
                  handleOpenClick={handleOpenClick}
                  areCommonElements={areCommonElements}
                  regionStyle={
                    areCommonElements(open, [region])
                      ? { display: "table-row" }
                      : { display: "none" }
                  }
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
