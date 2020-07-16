import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { makeStyles } from "@material-ui/core/styles";

import TownshipRow from "./TownshipRow";

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

const DistrictRow = ({
  district,
  districtStyle,
  open,
  handleOpenClick,
  areCommonElements,
}) => {
  const classes = useStyles();
  const townshipNumbers = [
    district.townships
      .map((township) => township)
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
      <TableRow style={districtStyle} hover>
        <TableCell component="th" scope="row" style={{ paddingLeft: "2rem" }}>
          {district.name}
        </TableCell>
        <TableCell>
          <Button
            aria-label="expand row"
            variant="contained"
            className={classes.button}
            endIcon={
              areCommonElements(
                open,
                district.townships.map((township) => township)
              ) ? (
                <RemoveIcon />
              ) : (
                <AddIcon />
              )
            }
            onClick={() => {
              handleOpenClick(district.townships.map((township) => township));
            }}
          >
            <span className={classes.buttonText}>
              {district.townships.length === 1
                ? "1 Township"
                : `${district.townships.length} Townships`}
            </span>
          </Button>
        </TableCell>
        {townshipNumbers.map((input) => (
          <React.Fragment key={input.id}>
            <TableCell>{input.lastInput}</TableCell>
            <TableCell>{input.formNumbers}</TableCell>
            <TableCell>{input.voterNumbers}</TableCell>
            <TableCell>{input.update}</TableCell>
          </React.Fragment>
        ))}
      </TableRow>
      {district.townships.map((township) => (
        <TownshipRow
          key={township.id}
          township={township}
          townshipStyle={
            areCommonElements(open, [township])
              ? { display: "table-row" }
              : { display: "none" }
          }
        />
      ))}
    </React.Fragment>
  );
};

export default DistrictRow;
