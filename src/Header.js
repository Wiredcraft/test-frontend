import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

const useStyles = makeStyles(() => ({
  iconStyles: { textAlign: "center" },
  textStyles: { marginLeft: "1rem", marginRight: "1rem" },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="transparent">
      <Toolbar disableGutters>
        <Grid item xs={2} sm={1} className={classes.iconStyles}>
          <LibraryBooksIcon />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={2} sm={1} className={classes.textStyles}>
          <Typography>Reports</Typography>
        </Grid>
        <Grid item xs={4} sm={8} />
        <Grid item xs={2} sm={1} className={classes.textStyles}>
          <Typography>Overall</Typography>
        </Grid>
        <Grid item xs={2} sm={1} className={classes.textStyles}>
          <Typography>Specific</Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
