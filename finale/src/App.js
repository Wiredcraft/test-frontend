import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import TableHeader from "./components/tableHeader";
import State from "./components/state";
import District from "./components/district";
import Township from "./components/township";
import Township2 from "./components/township2";
import Township3 from "./components/township3";
import Township4 from "./components/township4";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TableHeader />
      {/* <State /> */}
      <District />
      {/* <Township /> */}
      {/* <Township2 />
      <Township3 /> */}
      {/* <Township4 /> */}
    </React.Fragment>
  );
}

export default App;
