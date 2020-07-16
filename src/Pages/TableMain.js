import React, { useState } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import RegionRow from "../Components/RegionRow";
import FilterMenu from "../Components/FilterMenu";
import ResetButton from "../Components/ResetButton";
import SearchBar from "../Components/SearchBar";

//Function to compare arrays; specifically, for the queried array (whether from the search bar, filter menu, or dropdown buttons) and the array that is already open
const areCommonElements = (arr1, arr2) => {
  const arr2Set = new Set(arr2);
  return arr1.some((el) => arr2Set.has(el));
};

export default function TableMain({ Regions }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(Regions.map((region) => region)); //Initial state shows the items at the top of the nested array; in this case, the "Regions"
  const [selectedIndex, setSelectedIndex] = useState(0);

  //This function allows user to sort items by type Region, District, or Township. For example, if the Township filter is selected, all townships are set open including their parent districts and their grandparent regions.
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    if (index === 1) {
      setOpen(Regions.map((region) => region));
    } else if (index === 2) {
      setOpen([
        ...Regions.map((region) => region),
        ...Regions.map((region) =>
          region.districts.map((district) => district)
        ).flat(),
      ]);
    } else if (index === 3 || index === 0) {
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

  //This function allows the user to show child items via a dropdown click. Clicking again hides the child. It works by first checking whether the user is clicking an already opened row and that row does not have children itself. In which case, the opened array is filtered out by the indexed array (the array associated with the row where the button is located). Then, it checks if the user is clicking an already opened row and that row does have children. In which case, the opened array is filtered out by the indexed array and any of its children that might have been opened. If none of these conditions are true, it adds the indexed array to the opened array.
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
      <Grid item container spacing={2} direction="row">
        <Grid
          item
          xs={2}
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
          md={1}
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
        <Grid item xs={3} md={6} />
        <Grid
          item
          xs={6}
          md={3}
          style={{
            margin: "auto",
          }}
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
              <TableRow>
                <TableCell>Region</TableCell>
                <TableCell />
                <TableCell>Last Input</TableCell>
                <TableCell>Number of Forms</TableCell>
                <TableCell>Number of Voters</TableCell>
                <TableCell>Update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* The rows are displayed by comparing the "opened" array to the array specific to the type of row */}
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
