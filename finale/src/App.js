import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import TableHeader from "./components/tableHeader";
import Township from "./components/township";
import District from "./components/district";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TableHeader />
      <District />
      {/* <Township /> */}
    </React.Fragment>
  );
}

export default App;
