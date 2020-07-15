import React from "react";
import { Link } from "react-router-dom";

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
  linkStyles: { textDecoration: "none", color: "inherit" },
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
          <Link to="/wiredcraft-frontend-test" className={classes.linkStyles}>
            <Typography>Reports</Typography>
          </Link>
        </Grid>

        <Grid item xs={4} sm={8} />
        <Divider orientation="vertical" flexItem />
        <Grid item xs={2} sm={1} className={classes.textStyles}>
          <Link
            to="/wiredcraft-frontend-test/overall"
            className={classes.linkStyles}
          >
            <Typography>Overall</Typography>
          </Link>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={2} sm={1} className={classes.textStyles}>
          <Link
            to="/wiredcraft-frontend-test/specific"
            className={classes.linkStyles}
          >
            <Typography>Specific</Typography>
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
