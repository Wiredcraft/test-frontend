import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Table from "./components/table";
import TableBody from "./components/tableBody";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Table />
      <TableBody />
    </React.Fragment>
  );
}

export default App;
