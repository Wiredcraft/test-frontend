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
import SpecificLayout from "./Components/SpecificLayout";

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
            <Grid item xs={false} md={2} />
            <Grid item container xs={12} md={8} style={{ paddingTop: "2rem" }}>
              <Switch>
                <Route
                  exact
                  path="/wiredcraft-frontend-test/"
                  render={(props) => <TableMain {...props} Regions={Regions} />}
                />
                <Route
                  exact
                  path="/wiredcraft-frontend-test/overall"
                  render={(props) => <TableMain {...props} Regions={Regions} />}
                />
                <Route
                  exact
                  path="/wiredcraft-frontend-test/specific"
                  render={(props) => (
                    <SpecificLayout {...props} Regions={Regions} />
                  )}
                />
                <Route component={ErrorPage} />
              </Switch>
            </Grid>
            <Grid item container xs={false} md={2} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Router>
  );
}
