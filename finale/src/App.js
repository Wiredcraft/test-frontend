//Use township4 and district component

import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import TableHeader from "./components/tableHeader";
import State from "./components/state";
import District from "./components/district";
import District2 from "./components/district2";
import Township from "./components/township";
import Township4 from "./components/township4";
import Township5 from "./components/township5";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TableHeader />
      <State />
      {/* <District /> */}
    </React.Fragment>
  );
}

export default App;
