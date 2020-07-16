import React from "react";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AutoRenewIcon from "@material-ui/icons/Autorenew";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: 12,
    margin: "auto",
    fontSize: "1rem",
    textTransform: "none",
  },
  buttonText: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const ResetButton = ({
  open,
  setSelectedIndex,
  setOpen,
  setQuery,
  Regions,
}) => {
  const classes = useStyles();
  const handleResetButton = () => {
    if (!open) {
      return null;
    } else {
      setOpen(Regions.map((region) => region));
      setQuery("");
      setSelectedIndex(0);
    }
  };

  return (
    <Button
      onClick={handleResetButton}
      endIcon={<AutoRenewIcon />}
      className={classes.button}
    >
      <Typography className={classes.buttonText}>Reset</Typography>
    </Button>
  );
};

export default ResetButton;
