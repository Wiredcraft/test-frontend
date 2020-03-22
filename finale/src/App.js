//Use township4 and district component

import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import TableHeader from "./components/tableHeader";
import State from "./components/state";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TableHeader />
      <State />
    </React.Fragment>
  );
}

export default App;
