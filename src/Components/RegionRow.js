import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { makeStyles } from "@material-ui/core/styles";

import DistrictRow from "./DistrictRow";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: 8,
    margin: "auto",
    textTransform: "none",
    textAlign: "center",
  },
  buttonText: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const RegionRow = ({
  region,
  open,
  handleOpenClick,
  areCommonElements,
  regionStyle,
}) => {
  const classes = useStyles();

  //This array outputs the sum of each entry nested deepest in the array.
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
      <TableRow style={regionStyle} hover>
        <TableCell>{region.name}</TableCell>
        <TableCell>
          <Button
            aria-label="expand row"
            variant="contained"
            className={classes.button}
            //If the row is opened, include a remove sign over the button to hide row, otherwise include an add sign to show row
            endIcon={
              areCommonElements(
                open,
                region.districts.map((district) => district)
              ) ? (
                <RemoveIcon />
              ) : (
                <AddIcon />
              )
            }
            onClick={() => {
              handleOpenClick(region.districts.map((district) => district));
            }}
          >
            <span className={classes.buttonText}>
              {region.districts.length === 1
                ? "1 District"
                : `${region.districts.length} Districts`}
            </span>
          </Button>
        </TableCell>
        {regionNumbers.map((input) => (
          <React.Fragment key={input.id}>
            <TableCell>{input.lastInput}</TableCell>
            <TableCell>{input.formNumbers}</TableCell>
            <TableCell>{input.voterNumbers}</TableCell>
            <TableCell>{input.update}</TableCell>
          </React.Fragment>
        ))}
      </TableRow>
      {region.districts.map((district) => (
        <DistrictRow
          key={district.id}
          district={district}
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
