import React from "react";

import TableMain from "./TableMain";
import Header from "./Header";

import Grid from "@material-ui/core/Grid";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

import { Regions } from "./Regions.js";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column">
        <Grid item container direction="row">
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item container xs={12} sm={8} style={{ paddingTop: "2rem" }}>
            <TableMain Regions={Regions} />
          </Grid>
          <Grid item container xs={false} sm={2} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
