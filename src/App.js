import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import TableMain from "./Pages/TableMain";
import ErrorPage from "./Pages/ErrorPage";

import Grid from "@material-ui/core/Grid";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

import { Regions } from "./Data/Regions.js";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Grid container direction="column">
          <Grid item container direction="row">
            <Header />
          </Grid>
          <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item container xs={12} sm={8} style={{ paddingTop: "2rem" }}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => <TableMain {...props} Regions={Regions} />}
                />
                <Route
                  exact
                  path="/overall"
                  render={(props) => <TableMain {...props} Regions={Regions} />}
                />
                <Route
                  exact
                  path="/specific"
                  render={(props) => (
                    <TableMain {...props} Regions={Regions.slice(0, 2)} />
                  )} //The "specific" tab is a dummy link option. It just displays the same table but with spliced data.
                />
                <Route component={ErrorPage} />
              </Switch>
            </Grid>
            <Grid item container xs={false} sm={2} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Router>
  );
}
