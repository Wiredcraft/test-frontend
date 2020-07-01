import React from "react";
import ReactDOM from "react-dom";

import TableMain from "./TableMain";
import { Regions } from "./Regions.js";

ReactDOM.render(
  <TableMain Regions={Regions} />,
  document.getElementById("root")
);
