import React, { useState, useEffect } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

import styles from "./Styles/tablemainstyles.module.css";

import RegionRow from "./RegionRow";
import FilterMenu from "./FilterMenu";
import ResetButton from "./ResetButton";

const areCommonElements = (arr1, arr2) => {
  const arr2Set = new Set(arr2);
  return arr1.some((el) => arr2Set.has(el));
};

export default function TableMain({ Regions }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(Regions.map((region) => region));
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (
      Regions.map((region) =>
        region.name.toLowerCase().includes(query)
      ).includes(true)
    ) {
      setOpen(
        Regions.filter((region) => region.name.toLowerCase().includes(query))
      );
    } else if (
      Regions.map((region) =>
        region.districts.map((district) =>
          district.name.toLowerCase().includes(query)
        )
      )
        .flat()
        .includes(true)
    ) {
      setOpen([
        ...Regions.filter((region) =>
          region.districts
            .map((district) => district)
            .some((district) => district.name.toLowerCase().includes(query))
        ),
        ...Regions.map((region) =>
          region.districts.filter((district) =>
            district.name.toLowerCase().includes(query)
          )
        ).flat(),
      ]);
    } else if (
      Regions.map((region) =>
        region.districts.map((district) =>
          district.townships.map((township) =>
            township.name.toLowerCase().includes(query)
          )
        )
      )
        .flat(2)
        .includes(true)
    ) {
      setOpen([
        ...Regions.filter((region) =>
          region.districts
            .map((district) => district.townships.map((township) => township))
            .flat()
            .some((township) => township.name.toLowerCase().includes(query))
        ),
        ...Regions.map((region) => region.districts.map((district) => district))
          .flat()
          .filter((district) =>
            district.townships
              .map((township) => township)
              .flat(2)
              .some((township) => township.name.toLowerCase().includes(query))
          ),
        ...Regions.map((region) =>
          region.districts.map((district) =>
            district.townships.filter((township) =>
              township.name.toLowerCase().includes(query)
            )
          )
        ).flat(2),
      ]);
    } else {
      return;
    }
  }, [query]);

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

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
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
    <TableContainer
      component={Paper}
      className={styles.tableContainer}
      style={{ textAlign: "center" }}
    >
      <Grid container>
        <Grid item xs={6} md={2} style={{ textAlign: "center" }}>
          <FilterMenu
            selectedIndex={selectedIndex}
            handleMenuItemClick={handleMenuItemClick}
          />
        </Grid>
        <Grid
          item
          xs={6}
          md={1}
          style={{ textAlign: "center", paddingTop: 16, paddingBottom: 16 }}
        >
          <ResetButton
            open={open}
            setSelectedIndex={setSelectedIndex}
            setOpen={setOpen}
            setQuery={setQuery}
            Regions={Regions}
          />
        </Grid>
        <Grid item xs={12} md={9} style={{ textAlign: "center" }}>
          <TextField
            id="filled-full-width"
            placeholder="Search"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            onChange={handleChange}
            value={query}
            style={{ maxWidth: "95%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
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
  );
}
