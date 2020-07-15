import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

import Divider from "@material-ui/core/Divider";

import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

const useStyles = makeStyles(() => ({
  iconStyles: { textAlign: "center" },
  textStyles: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    minHeight: "inherit",
    display: "flex",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#F2F2F2",
    },
  },
  linkStyles: { textDecoration: "none", color: "inherit" },
}));

const Header = () => {
  const classes = useStyles();
  const location = useLocation();

  let pathname = location.pathname;

  useEffect(() => {
    pathname = location.pathname;
  }, [location]);

  return (
    <AppBar position="static" color="transparent" sticky>
      <Toolbar disableGutters>
        <Grid item xs={2} sm={1} className={classes.iconStyles}>
          <LibraryBooksIcon />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid
          item
          xs={2}
          sm={1}
          alignItems="center"
          className={classes.textStyles}
        >
          <ButtonBase centerRipple>
            <Link to="/wiredcraft-frontend-test" className={classes.linkStyles}>
              <Typography>Reports</Typography>
            </Link>
          </ButtonBase>
        </Grid>
        <Grid item xs={4} sm={8} />
        <Divider orientation="vertical" flexItem />
        <Grid
          item
          xs={2}
          sm={1}
          className={classes.textStyles}
          style={
            pathname.match("/wiredcraft-frontend-test/overall")
              ? { backgroundColor: "#F2F2F2" }
              : null
          }
          alignItems="center"
        >
          <ButtonBase centerRipple>
            <Link
              to="/wiredcraft-frontend-test/overall"
              className={classes.linkStyles}
            >
              <Typography>Overall</Typography>
            </Link>
          </ButtonBase>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid
          item
          xs={2}
          sm={1}
          className={classes.textStyles}
          style={
            pathname.match("/wiredcraft-frontend-test/specific")
              ? { backgroundColor: "#F2F2F2" }
              : null
          }
          alignItems="center"
        >
          <ButtonBase centerRipple>
            <Link
              to="/wiredcraft-frontend-test/specific"
              className={classes.linkStyles}
            >
              <Typography>Specific</Typography>
            </Link>
          </ButtonBase>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
